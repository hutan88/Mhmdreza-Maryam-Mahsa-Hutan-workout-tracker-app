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
const selectExercisesByUserID = function(userId){
    const data = db.prepare(`SELECT * FROM exercise  WHERE id=${userId}`).all();
    return data
 }
 
 const insertExercise = function (title,time,date,sets,category,id)
 {
     const data = db.prepare('INSERT INTO exercise (title,time,date,sets,category,id) VALUES (?, ?,?,?,?,?)');
     data.run(title,time,date,sets,category,id);
 }
 
 const deleteExercise = function(id){
     const data = db.prepare(`DELETE FROM exercise  WHERE id=${id}`);
     data.run();
 }
 
 const updateExercise = function(id,title,time,date,sets,category){
     const data = db.prepare(`UPDATE exercise SET title = ?, time = ? , date = ?, sets = ?, category = ?   WHERE id=${id}`);
     data.run(title,date,sets,category);
 }
 
 module.exports = {insertUser,selectUser,deleteUser,updateUser,selectExercisesByUserID,insertExercise,updateExercise,deleteExercise};