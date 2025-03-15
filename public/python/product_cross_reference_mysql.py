import mysql.connector
import os
import json

# Establishing connection to the database
mydb = mysql.connector.connect(
  host="YOUR_HOST_NAME",
  user="USER_NAME",
  password="PASSWORD",
  database="DATABASE_NAME"
)


mycursor = mydb.cursor()

input_directory = "api_result"
output_directory = "cross_referenced_json_mysql"
current_directory = os.getcwd()

input_directory_path = os.path.join(current_directory, input_directory)
output_directory_path = os.path.join(current_directory, output_directory)

# Create the output directory if it doesn't exist
if not os.path.exists(output_directory_path):
    os.makedirs(output_directory_path)

for filename in os.listdir(input_directory_path):
    print(filename)
    if filename.endswith(".json"):
        input_json_path = os.path.join(input_directory_path, filename)
        output_json_path = os.path.join(output_directory_path, filename)
        
        # Load JSON file
        with open(input_json_path) as json_file:
            data = json.load(json_file)
            annotations = data.get("annotation_results", [])  # Get annotations if exists, otherwise default to an empty list

        if annotations:
            for annotation in annotations:
                object_annotations = annotation.get("object_annotations", [])  # Get object annotations if exists, otherwise default to an empty list
                for object_annotation in object_annotations:
                    description = object_annotation["entity"]["description"]
                    try:
                        sql_query = "SELECT product_name FROM final_data WHERE product_name LIKE %s;"
                        mycursor.execute(sql_query, ('%' + description + '%',))
                        results = mycursor.fetchall()
                        result_list = [row[0] for row in results]
                        object_annotation["entity"]["db_products"] = result_list
                    except mysql.connector.Error as err:
                        print("Error executing MySQL query:", err)
        # Write the updated JSON data to a new file
        with open(output_json_path, 'w') as output_json_file:
            json.dump(data, output_json_file, indent=4)

mycursor.close()
mydb.close()
