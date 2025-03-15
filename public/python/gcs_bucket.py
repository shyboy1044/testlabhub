from google.cloud import storage
import os

class GCP_Bucket:
    
    def __init__(self, bucket_name = "cw-dataset"):
        storage_client = storage.Client()
        self.bucket_name = bucket_name
        self.bucket = storage_client.bucket(bucket_name)
        
    def get_list_bucket_contents(self):
        _list = []
        storage_client = storage.Client()
        print(self.bucket_name)
        bucket = storage_client.get_bucket(self.bucket_name)

        blobs = bucket.list_blobs()
        for blob in blobs:
            _list.append(blob.name)
        return _list

    # Function to download multiple files from bucket
    def download_from_bucket(self, source_directory_name, destination_directory_name):
        """
        This function downloads multiple file objects from the bucket to the local system.

        Args:
            bucket_name: Name of the bucket where your object resides
            source_directory_name: GCP directory name, from which we will download all the files
            destination_directory_name: Local directory name, in which we will download all the files
        """
        # storage_client = storage.Client()
        bucket = self.bucket
        blobs = bucket.list_blobs(prefix=source_directory_name)

        # check_folder(destination_directory_name)
        print("Downloading files......")

        for blob in blobs:
            file_name = blob.name.split("/")[-1]
            try:
                blob.download_to_filename(os.path.join(destination_directory_name, file_name))
                print(f"Successfully downloaded {file_name} into folder {destination_directory_name}")
                return True
            except:
                print(f"Got some error while downloading file {file_name}")
        print("File downloaded successfully.") 
        return False

    # Function to clear bucket folder
    def clear_bucket(self, folder_name):
        """
        This functions deletes all the files from the particular folder of the bucket, and then create 2 empty folders.

        Args:
            bucket_name: Name of the bucket
            folder_name: GCP directory name, from which all the files will be deleted
        """
        # storage_client = storage.Client()
        bucket = self.bucket
        blobs = bucket.list_blobs(prefix=folder_name)
        print("Bucket clearing......")
        for blob in blobs:
            try:
                blob.delete()
                # print(f"{blob.name} file deleted from the bucket folder {folder_name}")
            except:
                print(f"Got an error while deleting file {blob.name} from folder {folder_name}")
        
        return True

        
    
    def upload_to_google_storage(self, gcp_folder_path, local_folder_path):
        """
        This function upload a single file object to the bucket.

        Args:
        bucket_name(str): Name of the bucket
        folder_name(str): Name of the folder on the bucket in which you want to upload files
        source_file_name(str): Local path of the file which we have to upload on the bucket
        destination_blob_name(str): Name of the source file on the bucket
        """

        # storage_client = storage.Client()
        bucket = self.bucket
        blob = bucket.blob(gcp_folder_path)
        # generation_match_precondition = 0

        # blob.upload_from_filename(local_folder_path, if_generation_match=generation_match_precondition)
        blob.upload_from_filename(local_folder_path)
        