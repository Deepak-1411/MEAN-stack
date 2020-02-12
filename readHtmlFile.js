//lets send html web page to the http server and
// lets check whether is displayin proper or not
const fs = require('fs');
/*
fs.readFile('loginpage.html',(err,data)=>{
    if (err) throw err
    console.log(data);
})
*/
const http=require('http');
http.createServer(function(req,res){
fs.readFile('loginpage.html',function(err,data){
    if(err) throw err
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(data);
    res.end();
});
}).listen(3000)