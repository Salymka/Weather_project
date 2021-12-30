const express = require('express');
const router = express.Router();
const controller = require('../controllers/example-controller');
const { check, param } = require('express-validator');

router.get('/tasks/:id', [
  param('id', 'Name can not be empty').isNumeric(),
], controller.getTaskById);


router.get('/tasks/', controller.getTasks);

// router.post('/test', controller.login);

module.exports = router;