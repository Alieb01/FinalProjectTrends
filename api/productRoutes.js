const express = require('express');
const router = express.Router();
const db = require('../data/db');
const Product = require('../models/product');


router.get('/getAll', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM products');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching products');
    }
  });
  

module.exports = router;
