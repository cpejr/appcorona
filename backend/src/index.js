const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_ACESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error')
);
mongoose.connection.once('open', () => {
  console.log('database connect!');
});

app.listen(3333);
