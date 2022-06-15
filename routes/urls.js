const express = require('express');
const router = express.Router();
const {insertUser,selectUser,deleteRecord,updateRecord} = require('../models/crud')
const {signup} = require('../controllers/mycontroller')
const path = require('path');



// //router.get('/signup',(req,res)=>{
//     res.sendFile('./public/signup.html',{root:__dirname});
// })

 router
 .route('')
 .get((req,res)=>{
    res.sendFile(path.join(__dirname ,'../public','signup.html'))
 })
 .post(signup)
    
// router.get('/login',(req,res)=>{
//     res.sendFile('./public/login.html',{root:__dirname});
// })
// router.post('/login',(req,res)=>{
//     console.log('second');
//     res.sendFile('./public/login.html',{root:__dirname});
// })

// router.get('/testselect',(req,res)=>{
//     const users = selectUser();
//     res.render('testselect',{users})
// })


module.exports = router;