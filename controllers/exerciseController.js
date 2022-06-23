const {insertExercise,selectExercisesByUserID,deleteExercise,updateExercise} = require('../controllers/crud');
const global= require('../utils/session');
//const express = require('express');


function addExercise(req,res){
    //console.log('i enter addfunction');
    const{title,time,sets,date,category} = req.body;
    //userid
    const userId = global.getVarGlobal('getId');
    insertExercise(title,time,date,sets,category,userId)
}



function showUserExercise(req,res){
    const userId =  global.getVarGlobal('getId');
    const data = selectExercisesByUserID(userId)
    // change name of variable and also in front in dif card.twig
    res.render('exercise',{data})

}

function deleteUserExercise (req,res){
    console.log('enter delete ')
    const {exeId} = req.body
    console.log('delete',exeId);
    deleteExercise(exeId)
    res.send({answer:true})
    //res.redirect('/exercise')

}

function editUserExercsie(req,res){
    console.log('enter edit function')
    const {title,date,sets,time,category,exeid} = req.body;
    console.log('notice exeid',exeid)
    updateExercise(title,date,sets,time,category,exeid)
    res.send({answer:true})
    //res.redirect('/exercise')
}

module.exports = {addExercise,showUserExercise,deleteUserExercise,editUserExercsie}