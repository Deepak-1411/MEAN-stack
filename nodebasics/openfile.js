//code for open file using multiple flag and varify them
var fs=require('fs')

fs.open('createdfile.txt','r',function(err){
if(err) 
console.log(err)
else
console.log("File has been opened properly no error has been occured")
});