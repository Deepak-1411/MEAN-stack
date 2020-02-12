// creating and writting the file
var fs= require('fs')

fs.writeFile('createdfile.txt','This file is generated using the node js file system \n still i dont know how to move data to the next line',function(err){


    if(err)
    console.log(err)
else
console.log('Write operation has been compleated')

})