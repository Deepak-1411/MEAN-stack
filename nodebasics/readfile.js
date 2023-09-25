var fs=require('fs')

fs.readFile('sample11.txt',function(err,data){
if(err) throw err;
else
console.log("Text data inside the file is: "+" "+data);

});