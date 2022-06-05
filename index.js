const express = require('express')
const axious = require('axios').default;
const path = require('path');
const staticPath=path.join(__dirname,"public");
app.use(express.static(staticPath));
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
const twig = require("twig");
app.set("view engine","twig");
app.set("views",path.join(__dirname,"views"))




app.listen(3000,()=>{
    console.log('server started at http://localhost:3000')
})