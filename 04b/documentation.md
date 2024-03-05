# Database granular access documentation

## Database host

Host url: 172.104.203.246
Port: 3307

## Database users

### Doctor

username: doctor
password: doctor1234

### Hospital director

username: hos_director
password: director1234

## Access

### MySQL Shell

Connect to the database
`\connect <username>@<host_url>:<port>  `
Switch to SQL mode
`\sql `

### MySQL Client

`mysql -u<username> -p<password> -P<port> -h<host_url> `

## Queries

`SHOW databases; `
`USE hms_simple; `
`SHOW tables; `

`SELECT * FROM patient; ` # Only Doctor
`SELECT * FROM hospital `
`INSERT INTO patient (first_name, last_name, contact_number, cpr, address, hospital_id) VALUES (<first_name>, <last_name>, <contact_number>, <cpr>, <address>, <hospital_id>); ` # Only Doctor
