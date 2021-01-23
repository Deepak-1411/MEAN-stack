//code to write into the json file or create json file
'use strict'
 
const fs=require('fs');

/*let student={
    name:"john wick",
    age:'34',
    gender:"male",
    department:"agent",
    car :"Mustang"
};

let data = JSON.stringify(student,null,3);
fs.writeFileSync("student2.json",data);
*/
//below the code for same but in async mode
let student={
    name:"john wick",
    age:'34',
    gender:"male",
    department:"agent",
    car :"Mustang"
};

let data=JSON.stringify(student,null,3);
fs.writeFile("student.json",data,(err)=>{
    if(err) throw err;
    console.log("data has been written")
});
console.log("This is called at the end of the file read system")
