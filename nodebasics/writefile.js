var fs= require('fs');

fs.writeFile('sample11.txt',"Hello world did you Miss me again?",function(err){
    if(err)
    console.log(err)
    else
    console.log("writting in to the file operation is done properly");
});