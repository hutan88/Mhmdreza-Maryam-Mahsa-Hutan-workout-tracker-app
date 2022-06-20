
const {insertUser,selectUser,deleteUser,updateUser} = require('../controllers/crud');
const { hashPass,hashID} = require('../utils/hash');

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

    // const userID=hashID(findUser.id.toString())
    // console.log("Test ID:",userID);
    try {
        if (findUser && findUser.password === password ){
            // res.cookie('user-id',`${findUser.id}`)
            
            res.send({'id':findUser.id})         
            
        }else{
            res.send({'status':404})
        }
        
    } 
    catch (error) {
            console.log('Error :' + error);
    }

}

module.exports =  {register,login,checkDuplicateUsername};