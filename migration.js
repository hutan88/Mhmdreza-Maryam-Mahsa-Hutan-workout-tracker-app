const Database = require('better-sqlite3');
const path = require('path');

const db_name = path.join(__dirname, "models", "app.db");
let db = new Database(db_name , Database.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    verbose: console.log}
);
const createUserTable = "CREATE TABLE IF NOT EXISTS users( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,username Text,password Text)"
db.exec(createUserTable);


const createExeTable = "CREATE TABLE IF NOT EXISTS exercise( exeid INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,title Text,sets Integer,date Integer,count Integer,category Text,id Integer NOT NULL  , FOREIGN KEY (id) REFERENCES users(id))"
db.exec(createExeTable);

module.exports = {db};