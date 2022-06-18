const { db } = require('../migrations/migration.js');


// ================== CRUD User ==================
const insertUser= function (username,password)
{
    const data = db.prepare('INSERT INTO users (username,password) VALUES (?, ?)');
    data.run(username,password);
}

const selectUser= function ()
{
    const data = db.prepare('SELECT * FROM users').all();
    return data;
}



const deleteUser = function(id){
    const data = db.prepare(`DELETE FROM users  WHERE id=${id}`);
    data.run();
}

const  updateUser = function(id,username){
    const data = db.prepare(`UPDATE users SET username = ?   WHERE id=${id}`);
    data.run(username);
}


module.exports = {insertUser,selectUser,deleteUser,updateUser};



// ================== CRUD Exercise ==================
