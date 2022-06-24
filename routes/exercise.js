const express=require('express');
const router=express.Router();
const {addExercise, showUserExercise, editUserExercsie, deleteUserExercise} = require('../controllers/exerciseController');

router.route('/').get(showUserExercise)
router.route('/add').post(addExercise);
router.route('/exercise/edit').post(editUserExercsie);
router.route('/exercise/delete').post(deleteUserExercise)


module.exports=router;