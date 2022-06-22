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


// ================== CRUD Exercise ==================
const selectExercisesByUserID = function(userId){
    const data = db.prepare(`SELECT * FROM exercise  WHERE id=?`).all(userId);
    return data
 }
 
 const insertExercise = function (title,time,date,sets,category,id)
 {
     const data = db.prepare('INSERT INTO exercise (title,time,date,sets,category,id) VALUES (?, ?,?,?,?,?)');
     data.run(title,time,date,sets,category,id);
 }
 
 const deleteExercise = function(exeid){
     const data = db.prepare(`DELETE FROM exercise  WHERE exeid=?`);
     data.run(exeid);
 }
 
 const updateExercise = function(title,date,sets,time,category,exeid){
     const data = db.prepare(`UPDATE exercise SET title = ?,   date = ?, sets = ?,  time = ? ,    category = ?   WHERE exeid=?`);
     data.run(title,date,sets,time,category,exeid);
 }
 
 module.exports = {insertUser,selectUser,selectExercisesByUserID,insertExercise,updateExercise,deleteExercise};