const {insertExercise,selectExercisesByUserID} = require('../controllers/crud');
const global= require('../utils/session');
//const express = require('express');


function addExercise(req,res){
    console.log('i enter addfunction');
    const{title,date,sets,time,category} = req.body;
    //userid
    const id = global.getVarGlobal('getId');
    insertExercise(title,date,sets,time,category,id)
}



module.exports = {addExercise}