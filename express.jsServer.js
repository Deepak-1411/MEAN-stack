//server using the express.js
var express= require('express');
 var app=express();
  
 var server=app.listen(5000,function(err){
     if(err) throw err
     else
     console.log("server is running on port 5000 and ready to use");
 });