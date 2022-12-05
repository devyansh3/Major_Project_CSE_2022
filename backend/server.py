from flask import Flask, request, jsonify
import datetime

x = datetime.datetime.now()

app = Flask(__name__)


@app.route('/data', methods=['POST'])
def get_time():
    print(request.json['path'])
    return {
        'Name': "geek",
        "Age": "22",
        "Date": x,
        "programming": "python"
    }


if __name__ == '__main__':
    app.run(debug=True)
