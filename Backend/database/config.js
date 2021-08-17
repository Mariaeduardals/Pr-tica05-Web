import pg from "pg";

const client = new pg.Pool({
    user: "postgres",
    password: "1234" ,
    host: "localhost",
    database: "registro",
    port: 5432,
})

export default client;