import client from "../config.js"

client.connect();


client.query(
    "CREATE TABLE employees ( id serial PRIMARY KEY UNIQUE NOT NULL, nome  VARCHAR(50) NULL, cargo VARCHAR(50) NULL, data_nascimento TIMESTAMP NULL, data_entrada TIMESTAMP NULL)"
)

client.end();