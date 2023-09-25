//used to creat network in application
const http= require('http');

 //const server = http.createServer();  //server is an event emitter below code is to response the event emitter

// server.on('connection',function(socker){
// console.log("new connection...");
// });

const server = http.createServer((req,res)=>{
if(req.url=='/'){
  res.write('<h2>Hello</h2>');
    res.end();
}
if(req.url==='/api/courses'){
    res.write(JSON.stringify([1,2,3]));
    res.end();
}
});
server.listen(3000);
console.log("listning on port 3000...");