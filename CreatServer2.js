//creat server using  socket
const http= require('http');
 //const server= http.createServer();
/**server.listen(3000)
 server.on('connection',(socket)=>{
     console.log('New connection')
 })


console.log('listning to port 3000')
*/
// or we can code this way

const server=http.createServer(function(req,res){
if(req.url=='/'){
    res.write("Hello woeld i am back")
res.end();
}
if(req.url==='/api/cources'){
    res.write(JSON.stringify([1,2,3,4,5,5]));
    res.end();
}

});
server.listen(3000);
console.log("listning to the port 3000");