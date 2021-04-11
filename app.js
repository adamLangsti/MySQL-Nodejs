const express = require('express');
const mysql = require('mysql');

const app = express();

// Create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nodemysql',
    port: 3306,
});
// Connect to db
connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql Connected...');
});

// Create db
app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE nodemysql';
    connection.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).send('database created');
        console.log(result);
    });
});

// Create table
app.get('/createpoststable', (req, res) => {
    const sql =
        'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    connection.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).send('Posts table created');
        console.log(result);
    });
});

// Insert post 1
app.get('/addpost1', (req, res) => {
    const post = { title: 'Post One', body: 'This is post number one' };
    const sql = 'INSERT INTO posts SET ?';
    const query = connection.query(sql, post, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).send('Post 1 added...');
        console.log(result);
    });
});
// Insert post 2
app.get('/addpost2', (req, res) => {
    const post = { title: 'Post Two', body: 'This is post number two' };
    const sql = 'INSERT INTO posts SET ?';
    connection.query(sql, post, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).send('Post 2 added...');
        console.log(result);
    });
});

// Select all posts
app.get('/getposts', (req, res) => {
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.status(200).send('Posts fetched...');
    });
});

// Select individual post
app.get('/getpost/:id', (req, res) => {
    const sql = `SELECT * FROM posts WHERE id=${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.status(200).send('Post fetched...');
    });
});

// Update post
app.get('/updatepost/:id', (req, res) => {
    const newTitle = 'Updated Title';
    const sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    connection.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.status(200).send('Post Updated...');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    const sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    connection.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.status(200).send('Post deleted...');
    });
});
app.listen(5000, () => {
    console.log('Server listening on port 5000...');
});
