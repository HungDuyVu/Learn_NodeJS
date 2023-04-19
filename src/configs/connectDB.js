// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2';
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic'
});

// simple query
// connection.query(
//   'SELECT * FROM `users`',
//   function(err, results, fields) {
//      console.log('>>> check mysql')
//     console.log(results); // results contains rows returned by server
//     let rows = results.map((row) => {return row});
//     console.log(row); // results contains rows returned by server
//   }
// );

export default connection;

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);