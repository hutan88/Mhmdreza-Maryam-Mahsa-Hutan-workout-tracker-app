const express=require('express');
const router=express.Router();
const path=require('path');
const { login } = require('../controllers/userController');

<<<<<<< HEAD
router.route('/').get((req,res)=>
{

    res.sendFile( path.join(__dirname,'../public', 'login.html') );

}).post(login)
=======
router
 .route('')
 .get((req,res)=>{
    res.sendFile(path.join(__dirname ,'../public','signin.html'))
 })
 
>>>>>>> ce38917c285e29d66ba69b7dc72108fcb0bc25f8


module.exports=router;