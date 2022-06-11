const express = require('express');
const studentController = require('../../controllers/studentController')
const  studentRouter = express.Router();
// Endpoints
studentRouter.put('/:id', studentController.putStudent)
studentRouter.delete('/:id', studentController.deleteStudent)
studentRouter.get('/:id', studentController.listStudent);
studentRouter.get('/', studentController.listStudents);
studentRouter.post('/', studentController.postStudent)
module.exports = studentRouter;