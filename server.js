const express = require('express');
const cors = require('cors');
const {supercars} = require('./supercars.js')

const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // To parse JSON from body



// Route: Get all supercars
app.get('/supercars', (req, res) => {
  res.json(supercars);
});

// Route: Get a specific supercar by name
app.get('/supercars/:name', (req, res) => {
  const car = supercars.find(c => c.name.toLowerCase() === req.params.name.toLowerCase());
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
