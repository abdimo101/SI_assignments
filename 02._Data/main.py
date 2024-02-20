from parsing import parse_csv, parse_json, parse_yml, parse_xml, parse_txt
from flask import Flask

app = Flask(__name__)

@app.route("/csv")
def get_csv():
    csv_data = parse_csv()
    return csv_data.to_json()

@app.route("/json")
def get_json():
    json_data = parse_json()
    return json_data.to_dict()

@app.route("/yml")
def get_yml():
    yml_data = parse_yml()
    return yml_data.to_json()

@app.route("/xml")
def get_xml():
    xml_data = parse_xml()
    return xml_data.to_json()

@app.route("/txt")
def get_txt():
    txt_data = parse_txt()
    return txt_data

if __name__ == "__main__":
    app.run(debug=True)