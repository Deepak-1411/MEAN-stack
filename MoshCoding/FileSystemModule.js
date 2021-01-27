//Use file system module to work with files
const fs=require('fs');

// var files=fs.readdirSync('./'); //this returns all the folder name from current folder
// console.log(files);

fs.readdir('./',function(err,files){
if(err)
console.log('error',err);
else
console.log('Result',files);

});