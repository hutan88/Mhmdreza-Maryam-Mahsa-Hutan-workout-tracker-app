
const {insertUser,selectUser,deleteUser,updateUser} = require('../controllers/crud');
const { hashPass } = require('../utils/hash');

// ================ REGISTER ==============
const register = function(req,res){

    const {username} = req.body;
    const password = hashPass(req.body.password)
    insertUser(username,password);
    res.redirect('login');
}

const checkDuplicateUsername = function(req,res){

    const username1 = req.body;
    const users = selectUser();
    let check = (users.find((e => e.username === username1.username)));
    if(check){
        res.send({answer:false})
        return
    }
    res.send({answer:true})

}

// ================ LOGIN ==============


const login = function(req,res){
    console.log('check enter the function',req.body)
    const {username} = req.body;
    const password = hashPass(req.body.password)
    const users = selectUser();
    let findUser = (users.find((e => e.username === username)));
    console.log('test outer',findUser)
    if (findUser && findUser.password === password ){
        console.log('test if claues')
        //if (findUser.password === password){
            console.log('checkpassword')
            res.send({'id':findUser.id}) 
        
        
    }else{
        res.send({'status':404})
    }
}


module.exports =  {register,login,checkDuplicateUsername};