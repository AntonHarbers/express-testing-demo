const express = require('express');
const index = express.Router();

const array = [];

index.get('/', (req, res) => {
  res.json({ name: 'Tony' });
});

index.get('/test', (req, res) => {
  res.json({ array });
});

index.post('/test', (req, res) => {
  array.push(req.body.item);
  res.send('success!');
});

module.exports = index;
