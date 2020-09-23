from flask import Flask,request
# from flask_cors import CORS
from algo import style_transfer
import json

from config import Config

app = Flask(__name__)
# CORS(app)
app.config.from_object(Config)

@app.route('/')
def port():
    return "listening on port 0.0.0.0"

@app.route('/style')
def run_style_transfer():
    try:
        content_image_path = app.config["CONTENT_IMAGE_PATH"]
        style_image_path = app.config["STYLE_IMAGE_PATH"]
        saved = style_transfer(content_image_path, style_image_path)
    #         response = app.response_class(
    #             response= json.dumps({"img": images}),
    #             status=200,
    #             mimetype='application/json'
    #         )
        return "ok"
    except Exception as e:
        raise e


if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)