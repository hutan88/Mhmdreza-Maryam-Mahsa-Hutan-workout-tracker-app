const Database = require('better-sqlite3');
const path = require('path');
const fs = require("fs");


if (!fs.existsSync(path.join(__dirname,'../models'))){
    fs.mkdir(path.join(__dirname,'../models'),()=>{
        console.log('create models folder')
    })

}

const db_name = path.join(__dirname,'../models','app.db');

    let db = new Database(db_name , Database.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        verbose: console.log}
    );

const createUserTable = "CREATE TABLE IF NOT EXISTS users( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,username Text NOT NULL,password Text NOT NULL)"
db.exec(createUserTable);


const createExeTable = "CREATE TABLE IF NOT EXISTS exercise( exeid INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,title Text NOT NULL,sets Integer NOT NULL,date Integer NOT NULL,time Integer NOT NULL,category Text NOT NULL,id Integer NOT NULL  , FOREIGN KEY (id) REFERENCES users(id))"
db.exec(createExeTable);


// ======= Truncate users Table ================= 
// const clearDB = "DELETE FROM users";
// db.exec(clearDB);


// ======= Reset Auto Increment users Table ================= 
// const resetAutoIncrement = db.prepare(`UPDATE sqlite_sequence SET seq = ?   WHERE name=?`);
//     resetAutoIncrement.run(0,'users');

module.exports = {db};

    