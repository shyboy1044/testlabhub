import time
import os,os.path
from google.cloud import videointelligence
from gcs_bucket import GCP_Bucket
import mysql.connector
from google.cloud import storage
from vertexai.preview.generative_models import GenerativeModel, Part 
import json
video_client = videointelligence.VideoIntelligenceServiceClient()

bucket_name = "cw-dataset"
OUTPUT_BUCKET = f"gs://{bucket_name}/results"    

bucket = GCP_Bucket(bucket_name)
    # videointelligence.Feature.LABEL_DETECTION,
    # videointelligence.Feature.SHOT_CHANGE_DETECTION,
    # videointelligence.Feature.SPEECH_TRANSCRIPTION,
    # videointelligence.Feature.LOGO_RECOGNITION,
    # videointelligence.Feature.EXPLICIT_CONTENT_DETECTION,
    # videointelligence.Feature.TEXT_DETECTION,
    # videointelligence.Feature.FACE_DETECTION,
    # videointelligence.Feature.PERSON_DETECTION,
    
def analyze_video(input_uri, name,folder_name):

    features = [
    videointelligence.Feature.OBJECT_TRACKING,
    ]
    
    speech_config = videointelligence.SpeechTranscriptionConfig(
        language_code="en-US",
        enable_automatic_punctuation=True,
    )
    
    person_config = videointelligence.PersonDetectionConfig(
        include_bounding_boxes=True,
        include_attributes=False,
        include_pose_landmarks=True,
    )
    
    face_config = videointelligence.FaceDetectionConfig(
        include_bounding_boxes=True,
        include_attributes=True,
    )
    
    video_context = videointelligence.VideoContext(
        speech_transcription_config=speech_config,
        person_detection_config=person_config,
        face_detection_config=face_config,
    )
    print("input uri =================",input_uri)
    # input_uri = "gs://" + event["bucket"] + "/" + event["name"]
    file_stem = input_uri.split("/")[-1]
    print("file_stem",file_stem)
    output_uri = f"{OUTPUT_BUCKET}/{folder_name}/{name.replace('.mp4', '.json')}"
    print("output_uri=============",output_uri, '\n\n\n')

    video_client.annotate_video(
        request={
            "features": features,
            "input_uri": input_uri,
            "output_uri": output_uri,
            "video_context": video_context,
        }
    )

    print("Processing video ", input_uri)
    return True

# Download the json file's from the bucket and store them into the local system
def download_result(folder_name):
    gcp_folder_path = f"results/{folder_name}"
    local_folder_path = f"/var/www/vhosts/testlabhub.com/httpdocs/public/python/api_result/{folder_name}"
    if not os.path.exists(local_folder_path):
        os.makedirs(local_folder_path)
    res=bucket.download_from_bucket(gcp_folder_path, local_folder_path)
    return res
        

# Process the video and return a response with the resultant json file's GCS path
def process_videos(folder_name):
    
    # If you want to clear out previous results from Google Cloud Storage (GCS), uncomment this line:
    # bucket.clear_bucket('results/')
    
    for video in bucket.get_list_bucket_contents():
        if video.startswith(folder_name) and '.' in video:
            bucket_path = f"gs://cw-dataset/{video}"
            video_name = video.split('/')[-1]
            print(bucket_path, video_name)  
            analyze_video(bucket_path, video_name,folder_name)
            
    # Download the results from GCP Bucket to your Local System
       
    return True


def detect_from_image(image_path):
    with open(image_path, "rb") as image_file:
        image1 = Part.from_data(image_file.read(), mime_type="image/jpeg")
  
    model = GenerativeModel("gemini-pro-vision")
    responses = model.generate_content(["""Which objects are present in this image? Note: Please give me a response in list format""", image1],generation_config={"max_output_tokens": 2048,"temperature": 0.4,"top_p": 1,"top_k": 32},safety_settings=[],stream=True,)
    whole_response = ''
    for response in responses:
        whole_response += response.text
    return whole_response

def safe_open_w(path):

    os.makedirs(os.path.dirname(path), exist_ok=True)
    return open(path, 'w')


if __name__ == "__main__":
    while True:
        try:
            
            mydb = mysql.connector.connect(
                host="127.0.0.1",
                user="dbu5523026",
                password="testlabhub",
                database="adminer_dbs10642776"
            )
            mycursor = mydb.cursor()
            sql_query = "SELECT * FROM uploads WHERE status=0"
            mycursor.execute(sql_query)
            results = mycursor.fetchall()
            for x in results:
                sub_folder="videos" if x[2]=="video" else "images"
                blob_str = f"sources/{x[0]}_{sub_folder}/{x[1]}"
                
                
                
                bucket.upload_to_google_storage(blob_str,f"/var/www/vhosts/testlabhub.com/httpdocs/public/uploads/{sub_folder}/{x[1]}")
                if x[2]=='video':
                    print("video")
                    process_V = process_videos(f"sources/{x[0]}_{sub_folder}")
                    if(process_V):
                        while True:
                            downloaded=download_result(f"sources/{x[0]}_{sub_folder}")
                            if downloaded==True:
                                break
                        
                elif x[2]=='image':
                    print("image")
                    imageResult = detect_from_image(f"/var/www/vhosts/testlabhub.com/httpdocs/public/uploads/{sub_folder}/{x[1]}")
                    dictionary = {
                        "response":imageResult
                    }
                    json_object = json.dumps(dictionary, indent=4)
                    with safe_open_w(f"/var/www/vhosts/testlabhub.com/httpdocs/public/python/api_result/sources/{x[0]}_{sub_folder}/sample.json") as outfile:
                        outfile.write(json_object)

                sql_update = "UPDATE uploads SET status=1 WHERE id=%s;"
                mycursor.execute(sql_update, (x[0],))
                mydb.commit()
                
            mydb.close()
        except Exception as error:
            print(error)
    # Pass the folder_name of GCS in  which all videos are present to be processed.
    # folder_name = "test"
    
    # Process the videos present in that particular folder
    # process_videos(folder_name)


