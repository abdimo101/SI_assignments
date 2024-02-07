const fs = require('fs');
const csv = require('csv-parser');
const yaml = require('js-yaml');
const fastXmlParser = require('fast-xml-parser');

// Parsing CSV
const csvStream = fs.createReadStream('01a/script.csv').pipe(csv());
csvStream.on('data', (row) => console.log("CSV\n", row));

// Parsing YAML
const yaml_data = yaml.load(fs.readFileSync('01a/script.yml', 'utf8'));
console.log('YAML ', yaml_data);
// Parsing XML
const xml_data = fs.readFileSync('01a/script.xml', 'utf8');
const parser = new fastXmlParser.XMLParser();
const xmlParsed = parser.parse(xml_data, { ignoreAttributes: false });
console.log("XML\n", xmlParsed);


// Parsing JSON
const json_data = JSON.parse(fs.readFileSync('./01a/script.json'));
console.log("JSON\n", json_data);
