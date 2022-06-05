const express = require('express');
const req = require('express/lib/request');
const app = express()
const axious = require('axios').default;
const path = require('path');

app.set("view engine","twig")
app.set("views",path.join(__dirname,"templates"));

app.get("/",(req , res) => 
{
    res.render("main");
})

app.all('*',(req,res)=>
{
    res.render("404",{
        url:req.url
    })
})

app.listen(3000,()=> {

    console.log("server run at http://localhost:3000/");
} )