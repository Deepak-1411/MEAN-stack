//update some data from the database using the node js codes
var mysql=require('mysql');
 
var con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sher@lock',
    database:'mytestDB'
});

con.connect(function(err){
    if(err) throw err
    console.log("connected and Ready to use!!");
    con.query("update persons set LastName='Jorden1' where PersonID=3",function(err,results){
        if(err) throw err;
        console.log(results)
    con.end()
    });
});