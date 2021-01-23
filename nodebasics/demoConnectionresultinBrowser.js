//This is some other way to connect to the database and view the result in browser
var express = require('express');
var app= express();

app.get('./',function(req,res){
    var sql= require('mysql');
    //create config for the  database connection credentials
var config={
    user:'root',
    password:'sher@lock',
    server:'localhost',
    database:'nodeproject'
};
//connect to the data base
sql.connect(config,function(err,){
    if(err) console.log(err);
   // create variable to send request
    var request = new sql.request();
    //queary to the database and get the result that can be seen in the browser
    request.query('select * from the persons',function(err,results){
        if(err) console.log(err);
        //send record as reponse
        res.send(results);
    });
});
});
var  server=app.listen(5000,function(){
    console.log("server is ready and running properly")
});

