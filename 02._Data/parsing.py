import pandas as pd
import yaml
import xmltodict

## parsing with CSV
def parse_csv():
    csv = pd.read_csv('./script.csv')
    return csv

## parsing with JSON
def parse_json():
    json = pd.read_json('./script.json')
    return json

## parsing with YML/YAML
def parse_yml():
    yml_path = './script.yml'
    with open (yml_path, 'r') as file:
        yml_data = yaml.safe_load(file)
    yml = pd.json_normalize(yml_data)
    return yml

## parsing with XML
def parse_xml():
    xml_path = './script.xml'
    with open (xml_path, 'r') as file:
        xml_data = xmltodict.parse(file.read())
    xml = pd.json_normalize(xml_data)
    return xml

def parse_txt():
    txt = {}
    txt_path = './script.txt'
    with open (txt_path, 'r') as file:
        for line in file:
            key, value = line.strip().split(': ')
            txt[key] = value
    return txt