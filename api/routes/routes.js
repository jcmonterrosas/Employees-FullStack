const express = require('express');
const router = express.Router();

const employeeCtrl = require('../controllers/employeeController')

router.get('/', employeeCtrl.findAll);

router.post('/', employeeCtrl.create);

router.put('/:id', employeeCtrl.setBoss);

module.exports = router;