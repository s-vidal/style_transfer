from flask import Flask, request, make_response
from flask_cors import CORS
from algo import style_transfer
import json

from config import Config

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)


@app.route('/')
def port():
    return "listening on port 5000"


@app.route('/stylize', methods=["POST"])
def run_style_transfer():
    try:

        # if images are sent as FormData, get it as <FileStorage
        image_one = request.files["image_one"]
        image_one.save("images/uploaded_images/image_one.jpg")

        image_two = request.files["image_two"]
        image_two.save("images/uploaded_images/image_two.jpg")

        # content_image_path = app.config["CONTENT_IMAGE_PATH"]
        # style_image_path = app.config["STYLE_IMAGE_PATH"]
        saved = style_transfer("images/uploaded_images/image_one.png", "images/uploaded_images/image_two.png")

        with open("stylized_imgs/stylized_image.png", "rb") as image:
            f = image.read()
            image_binary = bytearray(f)
        response = make_response(image_binary)
        response.headers.set('Content-Type', 'image/jpeg')
        response.headers.set(
            'Content-Disposition', 'attachment', filename="stylized_image.png")
        return response
    except Exception as e:
        raise e


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)