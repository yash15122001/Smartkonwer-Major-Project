// FETCHING DATA FROM DATABASE
// Write a program using NodeJs to display students table content in terminal or console.

const client = require('./connect');
client.connect();
client.query('SELECT * FROM students', (err, result) => {
    if (!err) {
        console.log(result.rows);
    }
    client.end();
});