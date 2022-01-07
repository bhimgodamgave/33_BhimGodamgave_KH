const mysql = require("mysql");
const Promise = require("bluebird");
 Promise.promisifyAll(require("mysql/lib/Connection").prototype);

 const dbinfo ={
     host : "localhost",
     user : "root",
     password : "cdac",
     database : "project1",
 }

 const selectMessage = async() =>{
     const Connection = mysql.createConnection(dbinfo);
     await Connection.connectAsync();
     let sql = "select * from user";
     let list = await Connection.queryAsync(sql);
     await Connection.endAsync();
     return list;
     
 }

 const addMessage = async(user) =>{
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    let sql = "insert into user (message) values (?)";
    await Connection.queryAsync(sql,[user.message]);
    console.log("message added");
    await Connection.endAsync();
    
 }

 module.exports = {selectMessage,addMessage};