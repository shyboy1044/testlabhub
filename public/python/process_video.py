import time
import os
from google.cloud import videointelligence
from gcs_bucket import GCP_Bucket

    
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
    
def analyze_video(input_uri, name):

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
    output_uri = f"{OUTPUT_BUCKET}/{name.replace('.mp4', '.json')}"
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


# Download the json file's from the bucket and store them into the local system
def download_result():
    gcp_folder_path = "results"
    local_folder_path = os.path.join(os.getcwd(), "api_result")
    if not os.path.exists(local_folder_path):
        os.makedirs(local_folder_path)
    bucket.download_from_bucket(gcp_folder_path, local_folder_path)


# Process the video and return a response with the resultant json file's GCS path
def process_videos(folder_name):
    
    # If you want to clear out previous results from Google Cloud Storage (GCS), uncomment this line:
    # bucket.clear_bucket('results/')
    
    for video in bucket.get_list_bucket_contents():
        if video.startswith(folder_name) and '.' in video:
            bucket_path = f"gs://cw-dataset/{video}"
            video_name = video.split('/')[-1]
            print(bucket_path, video_name)  
            analyze_video(bucket_path, video_name)
            
    # Download the results from GCP Bucket to your Local System
    download_result()   
    return True


if __name__ == "__main__":
    # Pass the folder_name of GCS in  which all videos are present to be processed.
    folder_name = "test"
    
    # Process the videos present in that particular folder
    process_videos(folder_name)


