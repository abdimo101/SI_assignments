from flask import Flask, Response
from datetime import datetime
import time

app = Flask(__name__, static_url_path="/public", static_folder="public")

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/synchronize-time')
def synchronize_time():
    def generate():
        while True:
            time.sleep(1)
            yield f"data: {datetime.now().isoformat()}\n\n"

    return Response(generate(), content_type='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True, port=8080)
