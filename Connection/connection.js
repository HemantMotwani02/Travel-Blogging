const mongoose = require('mongoose');
const mysql = require('mysql');


// MongoDB Connection
async function connectMongoDB() {

    return mongoose
        .connect("mongodb://localhost:27017/userDB")
        .then(() => { console.log("successfully connected!! ") })
        .catch((err) => { console.log(err) })

}


//MySQL Connection
async function connectMySQL() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'pass',
        database: 'Test'
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            throw err;
        }
        console.log("Database Connected");
    });

    // Return the MySQL connection object
    return connection;
};


module.exports = { connectMongoDB, connectMySQL };
