const express = require('express')
const app = express();
const axious = require('axios').default;
const path = require('path');
const Database = require("better-sqlite3");
const staticPath=path.join(__dirname,"public");
app.use(express.static(staticPath));
app.use(express.json()); // Used to parse JSON bodies


const db_name = path.join(__dirname, "models", "app.db");
let db = new Database(db_name , Database.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    verbose: console.log}
);

const createUserTable = "CREATE TABLE IF NOT EXISTS users( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,username Text,password Text)"
db.exec(createUserTable);
const createExeTable = "CREATE TABLE IF NOT EXISTS exercise( exeid INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,title Text,sets Integer,date Integer,count Integer,category Text,id Integer NOT NULL  , FOREIGN KEY (id) REFERENCES users(id))"
db.exec(createExeTable);

app.set("view engine","twig");
app.set("views",path.join(__dirname,"views"))
console.log(path.join(__dirname,"views"))
app.get('/signup',(req,res)=>{
    res.sendFile('./public/signup.html',{root:__dirname});
})
app.get('/login',(req,res)=>{
    res.sendFile('./public/login.html',{root:__dirname});
})

app.get(':name(/index|/)',(req,res)=>{
    res.render('index');
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