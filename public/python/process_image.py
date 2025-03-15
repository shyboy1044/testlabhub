# 1. Install the Vertex AI SDK: Open a terminal window and enter the command below. You can also install it in a virtualenv.

# pip install --upgrade google-cloud-aiplatform
# gcloud auth application-default login

# Use the following code in your application to request a model response

from vertexai.preview.generative_models import GenerativeModel, Part 

def detect_from_image(image_path):
  with open(image_path, "rb") as image_file:
    image1 = Part.from_data(image_file.read(), mime_type="image/jpeg")
  
  model = GenerativeModel("gemini-pro-vision")
  responses = model.generate_content(
    ["""Which objects are present in this image?
Note: Please give me a response in list format""", image1],
    generation_config={
        "max_output_tokens": 2048,
        "temperature": 0.4,
        "top_p": 1,
        "top_k": 32
    },
    safety_settings=[],
  stream=True,
  )
  
  whole_response = ''
  for response in responses:
      print(response.text, end="")
      whole_response += response.text
  return whole_response

# Call function and provide an image path
image_path = "path/to/your/image.jpg"
detect_from_image(image_path)