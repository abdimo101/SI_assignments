# Database granular access documentation

## Database host

Host url: 172.104.203.246
Port: 3307

## Database users

### Doctor

username: doctor <br>
password: doctor1234

### Hospital director

username: hos_director <br>

password: director1234

## Access

### MySQL Shell

Connect to the database <br>
`\connect <username>@<host_url>:<port>  ` <br>
Switch to SQL mode <br>
`\sql `

### MySQL Client

`mysql -u<username> -p<password> -P<port> -h<host_url> `

## Queries

`SHOW databases; ` <br>
`USE hms_simple; ` <br>
`SHOW tables; ` <br>

`SELECT * FROM patient; ` # Only Doctor <br>
`SELECT * FROM hospital ` <br>
`INSERT INTO patient (first_name, last_name, contact_number, cpr, address, hospital_id) VALUES (<first_name>, <last_name>, <contact_number>, <cpr>, <address>, <hospital_id>); ` # Only Doctor
