const express = require('express');
const router = express.Router();
const pool = require('../database/dbConfig'); // Path to your dbConfig file

router.post('/register', (req, res) => {
  const { name, surname, phoneNumber, email, password } = req.body;

  const query = `INSERT INTO user_profiles (name, surname, phoneNumber, email, password) VALUES (?, ?, ?, ?, ?)`;
  pool.query(query, [name, surname, phoneNumber, email, password], (error, results) => {
    if (error) {
      console.error("Error registering user", error);
      res.status(500).json({ error: "Error registering user" });
    } else {
      console.log("User registered successfully");
      res.status(200).json({ message: "User registered successfully" });
    }
  });
});

module.exports = router;
