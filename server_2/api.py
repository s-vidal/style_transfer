from flask import Flask, request, make_response
from flask_cors import CORS
from style_transfer import style_transfer
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
        image_one_path = app.config["STYLE_IMG_ONE"]
        image_two_path = app.config["STYLE_IMG_TWO"]
        # gets image as <FileStorage>
        image_one = request.files["image_one"]
        image_one.save(image_one_path)

        image_two = request.files["image_two"]
        image_two.save(image_two_path)

        saved = style_transfer(image_one_path, image_two_path)

        with open(app.config["STYLE_STYLIZED_IMG"], "rb") as image:
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


# @app.route('/super_res', methods=["POST"])
# def enhance_img():
#     try:
#         pass
#         # # gets images as <FileStorage>
#         # uploaded_img = request.files["image"]
#         # uploaded_img.save(app.config["SUPER_RES_UPLOADED_IMG"])
#         #
#         # saved = enhance_img(app.config["SUPER_RES_UPLOADED_IMG"])
#         #
#         # with open(app.config["SUPER_RES_COMPUTED_IMG"], "rb") as image:
#         #     f = image.read()
#         #     image_binary = bytearray(f)
#         # response = make_response(image_binary)
#         # response.headers.set('Content-Type', 'image/jpeg')
#         # response.headers.set(
#         #     'Content-Disposition', 'attachment', filename="super_res_img.png")
#         # return response
#     except Exception as e:
#         raise e
#
#
# if __name__ == "__main__":
#     app.run(host='0.0.0.0', debug=True)