'use strict'

const debug = require('debug')('social:server');
const express = require('express');
const bodyParser = require('body-parser');

const user = require('./components/user/network');

const { config } = require('../config/');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/user/', user);

app.listen(config.port, () => {
  debug(`Servidor corriendo en ${config.host}:${config.port}`);
  console.log(`Servidor corriendo en ${config.host}:${config.port}`);
});