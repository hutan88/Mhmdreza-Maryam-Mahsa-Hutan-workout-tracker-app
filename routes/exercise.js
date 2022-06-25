const express=require('express');
const router=express.Router();
const {addExercise, showUserExercise, editUserExercsie, deleteUserExercise} = require('../controllers/exerciseController');

router.route('/').get(showUserExercise)
router.route('/add').post(addExercise);
router.route('/edit').post(editUserExercsie);
router.route('/delete').post(deleteUserExercise)


module.exports=router;