const express=require('express');
const app = express();
app.use(express.json());
const path=require('path');
const staticPath=path.join(__dirname,"public");
//test
const {addExercise,showUserExercise} = require('./controllers/exerciseController');

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
const indexRoute=require('./routes');
const registerRoute=require('./routes/register');
const loginRoute=require('./routes/login');
const exerciseRoute=require('./routes/exercise');
const mainRoute=require('./routes/main');
const { hashID, hashPass } = require('./utils/hash');


// =============== Routes Use ==============
app.use('/',indexRoute);
app.use('/register',registerRoute);
app.use('/login',loginRoute);
//app.use('/exercise',exerciseRoute);
app.use('/main',mainRoute);
//test
app.post('/exercise/add',addExercise);
//app.get('/exrcise/delete')
//app.post('/exercise/delete',deleteExrcise)
app.get('/exercise',showUserExercise)