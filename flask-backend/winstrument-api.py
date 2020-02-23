import json
import flask
from flask_cors import CORS, cross_origin
from flask import request, jsonify, send_from_directory
from soundhandler import *

app = flask.Flask(__name__, static_url_path='')
app.config["DEBUG"] = True
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/sounds/<path:path>')
def send_sound(path):
    print(path)
    return send_from_directory('sounds', path)


@app.route('/', methods=['GET'])
def home():
    return '''HELLO'''


# A route to return all of the available entries in our catalog.
@app.route('/api/sounds/all', methods=['GET'])
def api_all():
    return jsonify(getAllAvailableSounds())


app.run(host= '0.0.0.0')
