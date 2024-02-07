import pandas as pd
import yaml
import xmltodict
## parsing with CSV
csv = pd.read_csv('01a/script.csv')

print("CSV \n", csv.to_string(index=False))

## parsing with JSON
json = pd.read_json('01a/script.json')

print("JSON \n", json.to_string(index=False))
## parsing with YML/YAML
yml_path = '01a/script.yml'
with open (yml_path, 'r') as file:
    yml_data = yaml.safe_load(file)

yml = pd.json_normalize(yml_data)

print("YML \n", yml.to_string(index=False))
## parsing with XML
xml_path = '01a/script.xml'
with open (xml_path, 'r') as file:
    xml_data = xmltodict.parse(file.read())

xml = pd.json_normalize(xml_data)

print("XML \n", xml.to_string(index=False))