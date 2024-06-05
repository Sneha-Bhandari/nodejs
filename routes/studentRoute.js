//assignments
const express = require("express");
const router = express.Router();
const{
    getAllStudent,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controllers/studentcontroller")

router.route('/').get(getAllStudent);
router.route('/').post(getStudentById);
router.route('/:id').put(updateStudent);
router.route('/:id').delete(deleteStudent);

module.exports= router;
