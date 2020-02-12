//code To append file in created file 
var fs=require('fs')

fs.appendFile('createdfile.txt',"\n this statment added into text file using apppend method of the node.js",function(err){
if(err) 
console.log(err)
else
console.log("data has been appended properly you can see the updated file in your system")

});