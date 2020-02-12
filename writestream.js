//Write Stream 
 const fs= require('fs');
 var data='This is the data come through the writestream of nodejs';
 // create writtable stream
 var writestream=fs.createWriteStream('output.txt');

//set the encoding to the utf-8
writestream.write(data,'utf-8');
//mark the end of the file
writestream.end();
//handle stream events--->finish,error
writestream.on('finish',function(){
console.log('Writting is compleatd')
});

writestream.on('error',function(err){
console.log(err.stack);
});
console.log("Programme ended")