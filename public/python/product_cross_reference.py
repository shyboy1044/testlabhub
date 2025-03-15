import os
import json
import csv
from fuzzywuzzy import fuzz

# Function for matching
def match_description(description, products, fuzzy=False):
    if fuzzy:
        return fuzzy_match(description, products)
    else:
        return normal_match(description, products)

# Function for normal matching
def normal_match(description, products):
    return [product for product in products if description.lower() in product.lower()]

# Function for fuzzy matching
def fuzzy_match(description, products):
    matched_products = []
    for product in products:
        if fuzz.ratio(description.lower(), product.lower()) >= 40:  # Adjust the threshold as needed
            matched_products.append(product)
    return matched_products

# Define the input and output directories
input_directory = "api_result"
output_directory = "cross_referenced_json"

# Get the current working directory
current_directory = os.getcwd()

# Create the full paths for input and output directories
input_directory_path = os.path.join(current_directory, input_directory)
output_directory_path = os.path.join(current_directory, output_directory)

# Create the output directory if it doesn't exist
if not os.path.exists(output_directory_path):
    os.makedirs(output_directory_path)

# Load CSV file and extract "Name of product" column values
csv_filename = "recalls_recall_listing.csv"  # assuming the CSV file is in the current directory
csv_filepath = os.path.join(current_directory, csv_filename)
products = []
with open(csv_filepath, newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        products.append(row["Name of product"])

# Iterate over all JSON files in the input directory
for filename in os.listdir(input_directory_path):
    print(filename)
    if filename.endswith(".json"):
        input_json_path = os.path.join(input_directory_path, filename)
        output_json_path = os.path.join(output_directory_path, filename)
        
        # Load JSON file
        with open(input_json_path) as json_file:
            data = json.load(json_file)
            annotations = data.get("annotation_results", [])  # Get annotations if exists, otherwise default to an empty list

        # Initialize a dictionary to store products related to each description
        matches = {}

        # Compare "description" with "Name of product" values using either fuzzy or normal matching
        if annotations:
            for annotation in annotations:
                object_annotations = annotation.get("object_annotations", [])  # Get object annotations if exists, otherwise default to an empty list
                for object_annotation in object_annotations:
                    description = object_annotation["entity"]["description"]
                    matched_products = match_description(description, products, fuzzy=False)  # Set fuzzy=True to enable fuzzy matching
                    object_annotation["entity"]["db_products"] = matched_products

        # Write the updated JSON data to a new file
        with open(output_json_path, 'w') as output_json_file:
            json.dump(data, output_json_file, indent=4)

print("All JSON files updated and saved to the new folder.")

