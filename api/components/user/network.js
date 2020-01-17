'use strict'

const express = require('express');
const router = express.Router();

const response = require('../../../network/responses');
const Controller = require('./');

router.get('/', (req, res) => {
  Controller.list()
    .then(users => {
      response.success(req, res, users);
    })
    .catch(err => response.error(req, res, err.message));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Controller.get(id)
    .then(user => {
      response.success(req, res, user);
    })
    .catch(err => response.error(req, res, err.message));
});

router.post('/', (req, res) => {
  Controller.upsert(req.body)
    .then(() => response.success(req, res, 'Usuario registrado correctamente'))
    .catch(err => response.error(req, res, err.message));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Controller.remove(id)
    .then(() => {
      response.success(req, res, 'Usuario eliminado correctamente')
    })
    .catch(err => response.error(req, res, err.message));
});

module.exports = router;
