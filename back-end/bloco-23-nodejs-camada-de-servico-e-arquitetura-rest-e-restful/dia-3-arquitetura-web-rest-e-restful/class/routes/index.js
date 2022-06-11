const express = require('express')
const router = express.Router();
const studentRouter = require('./students/index');
const classRouter = require('./class/index');

//Rota '/students'
router.use('/students', studentRouter);

//Rota '/classes' -> falta implementar
router.use('/classes', classRouter);
module.exports = router;
