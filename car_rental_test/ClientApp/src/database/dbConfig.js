const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Number of connections in the pool
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'car_rental_User', // Your database name
});

module.exports = pool;
