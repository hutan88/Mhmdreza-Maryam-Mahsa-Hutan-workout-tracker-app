const express=require('express');
const router=express.Router();
const path=require('path');
const { selectUser,selectExercisesByUserID, insertExercise } = require('../controllers/crud');
const global = require('../utils/session');


router.get('/',(req,res)=>
{
 
    const allExercise = selectExercisesByUserID(global.getVarGlobal("getId"));
    res.render('main',{allExercise});
   
})



module.exports=router;  
