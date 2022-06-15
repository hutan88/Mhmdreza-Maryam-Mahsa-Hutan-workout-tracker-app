const express = require('express');
const app = express();
const path = require('path');
const staticPath=path.join(__dirname,"public");
app.use(express.static(staticPath));
app.use(express.json()); // Used to parse JSON bodies
const {insertUser,selectUser,deleteRecord,updateRecord} = require('./models/crud.js')
const {signup} = require('./controllers/mycontroller')
//const urls = require('./routes/urls')
const signupRoute =  require('./routes/urls')
const loginRoute =  require('./routes/login')
app.set("view engine","twig");
app.set("views",path.join(__dirname,"views"))
//app.use('./routes/urls',urls)




//routes

app.use('/signup', signupRoute); 
app.use('/login', loginRoute); 
// app.get('/signup',(req,res)=>{
//     res.sendFile('./public/signup.html',{root:__dirname});
// })

// app.post('/signup',signup)
    
    
//     //return
    

// app.get('/login',(req,res)=>{
//     res.sendFile('./public/login.html',{root:__dirname});
// })
// app.post('/login',(req,res)=>{
//     console.log('second');
//     res.sendFile('./public/login.html',{root:__dirname});
// })

// app.get('/testselect',(req,res)=>{
//     const users = selectUser();
//     res.render('testselect',{users})
// })

//console.log(selectUser())
//updateRecord(9,'pendar');
//console.log(selectUser())



app.listen(3000,()=> {

    console.log("server run at http://localhost:3000/");
} )