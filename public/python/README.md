# Vision-AI TestLabHub

## Setup

1. Open the terminal/command line and clone this repo in the system using the below command.

   ```
   git clone https://github.com/CloudWerx/vision-ai-testlabhub.git
   ```
2. After cloning the repo run the below command

   ```
   cd vision-ai-testlabhub
   ```
3. Install `python3.9` using below command

   * Create a virtual environment using `python 3.9`. Below are the steps to install virtual environment

   ```
   sudo apt update
   sudo apt install python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools virtualenv sox ffmpeg libcairo2 libcairo2-dev libpython3.9-dev
   virtualenv env --python=python3.9
   ```

   * Activate the environment using following command.

     ```
     source env/bin/activate1
     
     ```
4. After activating the environment, install required libraries using command

   ```
   pip install -r requirements.txt
   ```
5. Set up application default credentials:

   * To authenticate with Googl
   \,8
    e's Document AI, you need to set up application default credentials. Here's how:
   * Install the Google Cloud SDK if you haven't already. You can download it from Google Cloud SDK: (https://cloud.google.com/sdk/docs/install-sdk#deb).
   * After installing the SDK, create your credentials file by running the following command in your terminal:
     ```
     gcloud auth application-default login
     ```
   * Set up the project ID in which you have trained the Document AI model using the following command in your terminal.
     * Initialize the gcloud CLI:
       ```
       gcloud init
       ```
     * Now add a quota project in application default credentials (ADC):
       ```
       gcloud auth application-default set-quota-project PROJECT_ID
       ```
   * Follow the prompts to authenticate and authorize the application: [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc#local-user-cred)

## Running the Sample

### Processing the Video using Google Cloud Storage (GCS)

1. Create a Google Cloud Storage (GCS) bucket:
   * Before processing a video, you need to create a bucket on Google Cloud Storage.
   * Set the name of your bucket in the `bucket_name` variable within the `process_video.py` file.
2. Upload videos to GCS:
   * Move the videos you want to process into a folder within the created bucket.
   * Specify the name of this folder by assigning it to the `folder_name` variable within `process_video.py`.
3. Run the sample:
   * Before executing the command, ensure that your environment is set up and all requirements are installed.
   * Execute the following command in your terminal:
     ```
     python process_video.py
     ```
4. Accessing the results:
   * Upon completion, the API results will be stored in a "results" folder within your GCP bucket.
   * Additionally, the results will also be saved locally in the "api_result" folder.

#### Product cross referring using Python library:

1. Setting up fuzzy matching:
   * To enable fuzzy matching, ensure that you pass `fuzzy=True` in the `match_description` function within the `product_cross_reference.py` script.
2. Processing JSON files:
   * The script will automatically process all JSON files located in the "api_result" directory.
3. Creating cross-referenced JSON files:
   * After processing, the updated JSON files with cross-referenced information will be generated in the "cross_referenced_json" directory.
4. Executing the command:
   * Execute the following command in your terminal to initiate the product cross references:

     ```
     python product_cross_reference.py

     ```

#### Product cross referring using MySQL query:

1. Processing JSON files:
   * The script will automatically process all JSON files present in the "api_result" directory. This ensures that the latest data is used for cross references.
2. Creating cross-referenced JSON files:
   * Upon processing, the script generates updated JSON files with cross-referenced information. These files are stored in the "cross_referenced_json_mysql" directory for easy access.
3. Executing the command:
   * To initiate the product cross references process, execute the following command in your terminal:
     ```
     python product_cross_reference_mysql.py
     ```

### Processing the Image using Gemini

1. Set image path :
   * Set the path of the image you want to process in the `image_path` variable. Open `process_image.py` in a text editor, and locate the following line:

     ```
     image_path = "path/to/your/image.jpg"
     ```
     Replace `"path/to/your/image.jpg"` with the actual path to your image file.
2. Run the sample:
   * Before executing the command, ensure that your environment is set up and all requirements are installed.
   * Execute the following command in your terminal to process the image using Gemini:

     ```
     python process_image.py
     ```
