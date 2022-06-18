const express=require('express');
const app = express();
app.use(express.json());
const path=require('path');
const staticPath=path.join(__dirname,"public");
const {checkDuplicateUsername,login} = require('./controllers/userController')

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


// =============== Routes Use ==============
app.use('/',indexRoute);
app.use('/register',registerRoute);
app.use('/login',loginRoute);
app.use('/exercise',exerciseRoute);
app.post('/register/checkDuplicateUsername',checkDuplicateUsername)
app.post('/login',login)
app.get('/main',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'main.html'))
})
app.get('/exercise/:id',(req,res)=>{
    const id = req.params.id;
    //quesry where id = id 
    //res.render('exercise',{'query'})
})
