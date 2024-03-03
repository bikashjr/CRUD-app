// index.js
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
app.use(express.json());

const DB_URL = 'mongodb://127.0.0.1:27017/Crud';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    app.use('/api', router); // Mount router under /api prefix
    app.listen(8080, () => {
      console.log('Server is running on port 8080');
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });
