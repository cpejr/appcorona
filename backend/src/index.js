const express = require('express');
const routes = require('./routes');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(routes);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://art_lima1:<password>@cluster0-o87ch.gcp.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlPasser: true,
	useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', () => {
	console.log('database connect!');
});

app.listen(3333);