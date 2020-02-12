//update the data from table and  or add new row into in
const mysql=require('mysql');

const config={
    hostname:'localhost',
    user:'root',
    passwors:'sher@lock',
    database:'nodeproject'
}


 const con = mysql.createConnection(config,function(err){
     if(err) throw err;
     con.connect(function(err){
         if(err) console.log("unable to connect to the data base")
         else console.log("connected to the database!!")
     });
 });
