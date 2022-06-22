const {insertExercise,selectExercisesByUserID} = require('../controllers/crud');
const global= require('../utils/session');
//const express = require('express');


function addExercise(req,res){
    console.log('i enter addfunction');
    const{title,date,sets,time,category} = req.body;
    //userid
    const userId = global.getVarGlobal('getId');
    insertExercise(title,date,sets,time,category,userId)
}



function showUserExercise(req,res){
    const userId =  global.getVarGlobal('getId');
    console.log(userId);
    const data = selectExercisesByUserID(userId)
    console.log('mreza',data);
    res.render('exercise',{data})

}

module.exports = {addExercise,showUserExercise}