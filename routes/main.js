const express=require('express');
const router=express.Router();
const path=require('path');
const { selectExercisesByUserID } = require('../controllers/crud');
//const { getAPI } = require('../controllers/mainController');
const { getAPI,data } = require('../controllers/apiController');

const global = require('../utils/session');


router.get('/',(req,res)=>
{
    const data = getAPI("https://785d-151-240-107-26.eu.ngrok.io/api/ourgym")
    //console.log('check api',shampoExercise);
    //const pumpHouseExercise = getAPI(url)
    //const testData = [{username:'mahsa',exerciseName:'pushup',sets:'23'},{username:'mreza',exerciseName:'rollup',sets:'29'}]
    //getAPI();
    console.log(data)
    const allExercise = selectExercisesByUserID(global.getVarGlobal("getId"));
    res.render('main',{allExercise,data}); 
    
})





module.exports=router;  
