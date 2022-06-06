const express = require('express')
const app = express();
const axious = require('axios').default;
const path = require('path');
const staticPath=path.join(__dirname,"public");
app.use(express.static(staticPath));
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies


app.set("view engine","twig");
app.set("views",path.join(__dirname,"views"))
console.log(path.join(__dirname,"views"))
app.get('/signup',(req,res)=>{
    res.sendFile('./public/signup.html',{root:__dirname});
})
app.get('/login',(req,res)=>{
    res.sendFile('./public/login.html',{root:__dirname});
})

app.get('/main',(req,res)=>{
    res.render('main');
})
app.get('/exercise',(req,res)=>{
    res.render('exercise')
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