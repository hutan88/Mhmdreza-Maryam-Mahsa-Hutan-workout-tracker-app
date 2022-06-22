
const {insertUser,selectUser} = require('../controllers/crud');
const { hashPass,hashID} = require('../utils/hash');
const global= require('../utils/session');

// ================ REGISTER ==============
const register = function(req,res){

    const {username} = req.body;
    const password = hashPass(req.body.password)
    const user = username  
    insertUser(username.toLowerCase(),password);
    res.redirect('login');
}

// ========== Check Exist Username in Register Form ================ 
const checkDuplicateUsername = function(req,res){

    const {username} = req.body;
    const users = selectUser();
    let check = (users.find((e => e.username === username.toLowerCase())));

    if(check){
        res.send({answer:false})
        return
    }
    res.send({answer:true})

}

// ================ LOGIN ==============
const login = function(req,res){
   
    const {username} = req.body;
    const password = hashPass(req.body.password)
    const users = selectUser();
    let findUser = (users.find((e => e.username === username.toLowerCase())));

    try {
        let statesession=false;
        if (findUser && findUser.password === password ){
            global.setVarGlobal("getId",findUser.id);
            statesession=true;
            const hashedID=hashID( findUser.id.toString());
            res.send({'id':hashedID,'state': statesession});
        }
        else
        {
            statesession=false;
            res.send({'status':404})
        }
        
    } 
    catch (error) {
            console.log('Error :' + error);
    }

}

module.exports =  {register,login,checkDuplicateUsername};