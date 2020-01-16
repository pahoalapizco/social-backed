'use strict'

const express = require('express');
const router = express.Router();

const response = require('../../../network/responses');

router.get('/', (req, res) => {
  response.success(req, res, 'Funcionando');
});

module.exports = router;
