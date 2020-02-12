//piping of stream 
//In this we read data from one stream and send that data to the another stream
//below are the codes for the pipe stream

const fs=require('fs');

//create readable stream
var readerStream=fs.createReadStream('input.txt');

//create a writable stream
var writestream=fs.createWriteStream('output1.txt');
// now lets pipe the first streams
//read input txt and write the data into the output1.txt
readerStream.pipe(writestream);

console.log("Programme ended");