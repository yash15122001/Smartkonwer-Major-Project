// program to connect to server

const { Client } = require("pg");
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Yash@15122001',
    database: 'online_vidya'
});
module.exports = client;