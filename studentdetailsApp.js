//Lets use Student.json data to our application
//using sync read method  and with Async method both
'use strict';

const fs = require('fs');

fs.readFile('student.json', (err, data) => {  
    if (err) throw err;
    let student = JSON.parse(data);
    console.log("Name of the User is "+" "+student.name);
    console.log("Age of the User is "+" "+student.age);
    console.log("Gender of the user is "+" "+student.gender);
console.log("department of the user is "+" "+student.department)
console.log("Car owned by the user is"+" "+student.car)
});
var data={Home2:"Bhandup2"}
let dataset=JSON.stringify(data,null,"\t");
fs.writeFile("student.json",dataset,(err)=>{
if(err) throw err;
console.log("data has been appended")
});

console.log('This is after the read call');  


/*let data=fs.readFileSync("student.json")
    let student=JSON.parse(data)
    console.log(student);
    */
