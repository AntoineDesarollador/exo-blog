// configurer la BDD
import mysql from "mysql2/promise";
import session from "express-session";

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT
});

export { pool };