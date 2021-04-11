// const express = require('express');
// const mysql = require('mysql');

// const app = express();

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'test_db',
//     port: 3306,
// });

// connection.connect((error) => {
//     if (error) {
//         confirm.warn(error);
//         throw error;
//     }
//     console.log('Connected');
// });

// Create table in mysql with id and thing
// connection.query(
//     'CREATE TABLE tabletest(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, thing VARCHAR(255) NOT NULL)',
//     (error, rows) => {
//         if (error) {
//             throw error;
//         }
//         console.log('DATA SENT BOIS');
//         console.log(rows);
//     }
// );

// connection.query(
//     'INSERT INTO tabletest(id, thing) VALUES (5, "Abdullah")',
//     (error, rows) => {
//         if (error) {
//             throw error;
//         }
//         console.log('DATA SENT BOIS');
//         console.log(rows);
//     }
// );

// app.listen(5000, () => {
//     console.log(`Server listening on port 5000.`);
// });
