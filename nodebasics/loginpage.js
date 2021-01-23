const http =require('http');
const fs = require('fs');

var server= http.createServer(function(req,res){
    if(req.url=='/'){
 fs.readFile('loginpagewithvalidation.html',function(err,data){
   res.write(data);
   res.end();
 })
    
    }

}).listen(5000);
console.log('Node.js web server at port 5000 is running..')