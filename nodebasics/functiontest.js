//anonymous function
//it is a function that is declaired when rewquired to use 
//this function is not assigned to the variables
//Most command use of the anonymous function(it also act as callback even if it didnt realised it) is with set timeout and setInterval
//This are the two js code that will exicute after the wait for some millisecound
//BELOW are the Example of anonymous function using settimeout

console.log("Hello...");
setTimeout(function(){ //these function can be called as anonymous function
    console.log('World i am here again')
},5000)

//callback and how the node js exicuted async way

/** var somevalue;
var myfunction = function(){
    setTimeout(function(){
        console.log("Time Out for 5 secs");
      somevalue=somevalue/2;
      console.log(somevalue)
    },5000)
}
somevalue=100;
myfunction();
console.log(somevalue); */
//Here due to set time out it will not wait to exicute set timeout function it will not wait and exicute all other functions

// here the problem is that the somevalue is directly called and befor it is devided by 2 so this is not desired output
//we can acheive the desired output using the callback check the below codes


var somevalue;
var myfunction=function(callback){
    setTimeout(function(){
        somevalue=somevalue/2;
    console.log("set timeout for some5 sec")
    callback(somevalue);
    }, 5000);
}

somevalue=100;
myfunction(function(){
    console.log(somevalue);
});
