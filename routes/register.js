const express=require('express');
const router=express.Router();
const path=require('path');
const { register } = require('../controllers/userController');

router.route('/').get((req,res)=>
{

    res.sendFile( path.join(__dirname,'../public', 'register.html') );

}).post(register)



module.exports = router;