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
See patients <br>
`SELECT * FROM patient; ` <br>
See hospitals <br>
`SELECT * FROM hospital; ` <br>
Create hospitals <br>
`INSERT INTO hospital (name) VALUES (<name>); ` # Only Hospital director <br>
Create patients <br>
`INSERT INTO patient (first_name, last_name, contact_number, cpr, address, hospital_id) VALUES (<first_name>, <last_name>, <contact_number>, <cpr>, <address>, <hospital_id>); ` # Only Doctor <br>
See doctors <br>
`SELECT * FROM doctor; ` # Only Hospital director <br>
Create doctors <br>
`INSERT INTO doctor (first_name, last_name, contact_number, cpr, address, hospital_id) VALUES (<first_name>, <last_name>, <contact_number>, <cpr>, <address>, <hospital_id>); ` # Only Hospital director
