require('./config/config');

const express = require('express');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

module.exports = {app};
