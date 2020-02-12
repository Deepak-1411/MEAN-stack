var http=require('http');

http.createServer(function(req,res){
res.writeHead(200,{'containt-Type':'text/plain'});
res.write("Hello World!");
res.end();
}).listen(8080,'localhost')

console.log("Server uis up and running on local host 8080 ")
//