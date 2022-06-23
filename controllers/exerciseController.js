const {insertExercise,selectExercisesByUserID,deleteExercise,updateExercise} = require('../controllers/crud');
const global= require('../utils/session');
//const express = require('express');


function addExercise(req,res){
    
    const{title,time,sets,date,category} = req.body;
    //userid
    const userId = global.getVarGlobal('getId');
    insertExercise(title,time,date,sets,category,userId)
}



function showUserExercise(req,res){
    const userId =  global.getVarGlobal('getId');
    const userExercise = selectExercisesByUserID(userId)
    res.render('exercise',{userExercise})

}

function deleteUserExercise (req,res){
    const {exeId} = req.body
    deleteExercise(exeId)
    res.send({answer:true})
    //res.redirect('/exercise')

}

function editUserExercsie(req,res){
    const {title,date,sets,time,category,exeid} = req.body;
    updateExercise(title,date,sets,time,category,exeid)
    res.send({answer:true})
    //res.redirect('/exercise')
}

module.exports = {addExercise,showUserExercise,deleteUserExercise,editUserExercsie}