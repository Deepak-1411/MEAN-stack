//HANDLE big file data with another appproch
const fs= require('fs');
const server=require('http').createServer();

server.on('request',(req,res)=>{
    const src=fs.createReadStream('./big.file');
    src.pipe(res)
});

server.listen(8001)
console.log("Listning to the server 8001");