const express = require('express');
const {insertUser,selectUser,deleteRecord,updateRecord} = require('../models/crud.js');

//app.use(express.json()); // Used to parse JSON bodies

const signup = function(req,res){
    const {username,password} = req.body;
    insertUser(username,password)
    res.redirect('login');
}

module.exports = {signup}