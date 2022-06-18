
const {insertUser,selecttUser,selecttUserCompare,deleteUser,updateUser} = require('../controllers/crud');
const { hashPass } = require('../utils/hash');

// ================ REGISTER ==============
const register = function(req,res){

    const {username} = req.body;
    const password = hashPass(req.body.password)
    insertUser(username,password);
    res.redirect('login');
}


// ================ LOGIN ==============

const login = function(req,res){

    const {username} = req.body;
    const password = hashPass(req.body.password)
    // const getUser= selecttUserCompare(username);
    // console.log(getUser);
    // insertUser(username,password);
    // res.redirect('login');
}


module.exports =  {register,login};