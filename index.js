const express=require('express');
const app = express();
app.use(express.json());
const path=require('path');
const staticPath=path.join(__dirname,"public");

// ============= Twig ===========
app.set('view engine' , 'twig');
app.set('views' ,path.join(__dirname,'./views'));

// =============== Listen ==============
app.listen(3000,(err)=>{
    console.log("Listen On Port 3000");
});


// =============== Serving Static Files  ==============
app.use(express.static(staticPath));


// =============== Routes Requires ==============
const indexRoute=require('./routes/main');
const registerRoute=require('./routes/register');
const loginRoute=require('./routes/login');
const exerciseRoute=require('./routes/exercise');


<<<<<<< HEAD
// =============== Routes Use ==============
app.use('/',indexRoute);
app.use('/register',registerRoute);
app.use('/login',loginRoute);
app.use('/exercise',exerciseRoute);
=======
//routes

app.use('/signup', signupRoute); 
app.use('/signin', loginRoute); 
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
>>>>>>> ce38917c285e29d66ba69b7dc72108fcb0bc25f8


