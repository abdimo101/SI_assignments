from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('message')
def websocket_endpoint(message):
    print('received message: ' + message)
    socketio.send('echo: ' + message)

if __name__ == '__main__':
    socketio.run(app)
