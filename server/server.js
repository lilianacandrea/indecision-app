require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

module.exports = {app};
