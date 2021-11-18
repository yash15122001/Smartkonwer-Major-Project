// INSERTING DATA TO DATABASE:
// Using NodeJs, express js write a program / programs to insert date into students table
// which you created above in postgresql database.

const client = require('./connect');
client.connect();
client.query("INSERT INTO students VALUES(1,'Yash Nimbalkar','1234567890','yash@gmail.com','Web development')", (err, result) => {
    if (!err) {
        console.log("Data inserted successfully to the students table!");
    }
    client.end();
});