from flask import Flask, request, jsonify, render_template
import json
import requests
app = Flask(__name__)

endpoint_data_file = 'endpoint_data.json'
registered_endpoints = []

with open(endpoint_data_file, 'r') as file:
    registered_endpoints = json.load(file)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/webhooksregister', methods=['POST'])
def register_webhook():
    data = request.json
    url = data.get('url')
    event_type = data.get('eventType')

    allowed_event_types = ["patient_registered", "appointment_scheduled", "treatment_recieved", "patient_discharged"]

    if not url or not event_type:
        return jsonify({'error': 'Missing required fields'}), 400
    
    if event_type not in allowed_event_types:
        return jsonify({'error': 'Invalid event type'}), 400
    
    registered_endpoints.append({'url': url, 'eventType': event_type})
    save_endpoint_data()

    return jsonify({'success': True})

@app.route('/webhooksunregister', methods=['POST'])
def unregister_webhook():
    data = request.json
    url = data.get('url')
    event_type = data.get('eventType')
    if not url or not event_type:
        return jsonify({'error': 'Missing required fields'}), 400
    
    registered_endpoints[:] = [endpoint for endpoint in registered_endpoints if not (endpoint['url'] == url and endpoint['eventType'] == event_type)]
    save_endpoint_data()

    return jsonify({'success': True})

@app.route('/ping', methods=['GET'])
def ping_webhooks():
    for endpoint in registered_endpoints:
        print(f"Calling webhook at {endpoint['url']} for event type {endpoint['eventType']}")
        try:
            response = requests.post(url=endpoint['url'], json={'message': f"Calling webhook at {endpoint['url']} for event type {endpoint['eventType']}"})
            if response.status_code == 200:
                print(f"Successfully pinged {endpoint['url']}")
            else:
                print(f"Failed to ping {endpoint['url']} with status code {response.status_code}")
        except requests.RequestException as e:
            print(f"Failed to ping {endpoint['url']}: {str(e)}")
    return jsonify({'success': True})
def save_endpoint_data():
    with open(endpoint_data_file, 'w') as file:
        json.dump(registered_endpoints, file, indent=2)

if __name__ == '__main__':
    app.run(debug=True, port=4000)