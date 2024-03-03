const express = require('express');
const mongoose = require('mongoose');
const alienRouter = require('./routes/aliens')

const app = express();
app.use(express.json());

const DB_URL = 'mongodb://127.0.0.1:27017/Crud';

app.use('/aliens', alienRouter)

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(8080, () => {
      console.log('Server is running on port 8080');
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });

app.listen(9999, () => {
  console.log('Running on port 9999');
})