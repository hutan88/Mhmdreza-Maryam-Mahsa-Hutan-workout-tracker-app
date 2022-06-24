const express=require('express');
const router=express.Router();
const path=require('path');
const { selectView } = require('../controllers/crud');

router.get('/',(req,res)=>
{

    res.sendFile( path.join(__dirname,'../public', 'index.html') );
})

router.get('/api',(req,res)=>
{
    res.json(selectView());
})
module.exports=router;