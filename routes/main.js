const express=require('express');
const router=express.Router();
const path=require('path');
const { selectExercisesByUserID, insertExercise } = require('../controllers/crud');

router.get('/',(req,res)=>
{
 
    const allExercise =selectExercisesByUserID(1);
    console.log(allExercise);
    res.render('main',{allExercise});
   
});

 router.post('/api/all',(req,res)=>
{
     const id= req.headers.myid;
     console.log(  id);
     const allExercises =selectExercisesByUserID(id);
    res.json({allExercises});


    // const id= req.headers;
    // console.log(id);
    // res.render('main');
    
})
module.exports=router;  
