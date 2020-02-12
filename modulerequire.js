//Require and module

//there is already created file dowork.js in same directory and that is exported to module we will use that do work created module
// here we will require the do work function
var worker=require('./dowork.js')
 console.log(worker);
var somework=1;
var anotherwork=2;

var newWork= worker.doWork(somework,anotherwork);
console.log(newWork)