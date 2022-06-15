const express = require('express');
const router = express.Router();
const {insertUser,selectUser,deleteRecord,updateRecord} = require('../models/crud')
const {signup} = require('../controllers/mycontroller')
const path = require('path');

router
 .route('')
 .get((req,res)=>{
    res.sendFile(path.join(__dirname ,'../public','login.html'))
 })
 


 module.exports = router;