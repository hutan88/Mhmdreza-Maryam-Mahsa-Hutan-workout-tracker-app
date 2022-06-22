const {insertExercise,selectExercisesByUserID,deleteExercise} = require('../controllers/crud');
const global= require('../utils/session');
//const express = require('express');


function addExercise(req,res){
    console.log('i enter addfunction');
    const{title,time,sets,date,category} = req.body;
    //userid
    const userId = global.getVarGlobal('getId');
    insertExercise(title,time,date,sets,category,userId)
}



function showUserExercise(req,res){
    const userId =  global.getVarGlobal('getId');
    console.log(userId);
    const data = selectExercisesByUserID(userId)
    console.log('mreza',data);
    res.render('exercise',{data})

}

function deleteUserExercise (req,res){
    console.log('enter delete ')
    const {exeId} = req.body
    deleteExercise(exeId)
    res.send({answer:true})
    res.redirect('/exercise')

}

module.exports = {addExercise,showUserExercise,deleteUserExercise}