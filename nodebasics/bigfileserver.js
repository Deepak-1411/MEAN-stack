//lets handle that big file in server can handle it or not 
//below are the codes for the same
const fs= require('fs');
const server=require('http').createServer();
server.on('request',(req,res)=>{
fs.readFile('./big.file',(err,data)=>{
    if(err) throw err;
    res.end(data);
});
});
server.listen(8000);
console.log("server is listning to the port 8000")

// but ther is problem with this way it is in efficiant way
//in this all data first stored into the memory and will send back to the server it will
//consume lost of memory if we increase the data size to some 100mb size 
//source:https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93
// there is some another way where we can send data chunk by chunk
// it is much more efficiant than the present behaviour
//ANOTHER WAY OF CODE IS AT bigfileserver2.js IN SAME DIRECTORY
