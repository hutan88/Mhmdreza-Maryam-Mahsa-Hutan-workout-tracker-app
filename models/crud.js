const {db} = require('../migration.js');





const insertUser = function(username,password){

    const stmt = db.prepare('INSERT INTO users (username,password) VALUES (?, ?)')
    stmt.run(username,password);
}

const selectUser = function(){
    const data = db.prepare(`SELECT * FROM users `).all();
    return data 
}

const deleteRecord = function(id){
    const stmt = db.prepare(`DELETE FROM users  WHERE id=${id}`)
    stmt.run()
}

const  updateRecord = function(id,username){
    const stmt2 = db.prepare(`UPDATE users SET username = ?   WHERE id=${id}`)
    stmt2.run(username);
}


module.exports = {insertUser,selectUser,deleteRecord,updateRecord}