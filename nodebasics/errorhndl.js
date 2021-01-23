//error handling in node js
//by using try catch, callback and promises
 const http = require('http');

 const server=http.createServer(function(req,res){
if(req.url="/hello"){
    res.write("Hello World")
    res.end();
}else{
    next('test1')
}
if(req.url=="/error"){
    next(err)
}
function test1(){
    console.log("inside the test1")
}

 });
 server.listen(3000);
 console.log("Listning to the port 3000")
