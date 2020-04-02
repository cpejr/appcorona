const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(routes);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_ACESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', () => {
  console.log('database connect!');
});

app.listen(3333);
