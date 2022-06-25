const express=require('express');
const router=express.Router();
const {addExercise, showUserExercise, editUserExercsie, deleteUserExercise} = require('../controllers/exerciseController');

router.route('/').get(showUserExercise)
router.route('/add').post(addExercise);
router.route('/edit').put(editUserExercsie);
router.route('/delete').delete(deleteUserExercise)


module.exports=router;