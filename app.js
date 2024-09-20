const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const ultrasoundsRouter = require('./routes/ultrasounds');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/patients', patientsRouter);
app.use('/ultrasounds', ultrasoundsRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ultrasoundDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
