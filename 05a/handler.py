from flask import Flask, request

app = Flask(__name__)

@app.route('/handler', methods=['POST'])
def handle_webhook():
    data = request.json
    print("Received webhook event: ", data)
    return
