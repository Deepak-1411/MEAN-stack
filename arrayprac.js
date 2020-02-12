//Arrays in node js ,it work same as all othe language
var favmovies=['12 angry man','train yr dragon','rush','Jnmd']; //array with data
var place=[]; //this is an empty array
var city= new Array(); //this is also an empty array

var firstmovie=favmovies[0];
console.log(firstmovie); //printing data from array

//add new item in array in node js

favmovies.push("Last king");

console.log(favmovies);

//to remove the last item from the array we use pop

favmovies.pop(); //it will remove the last item from the array
console.log(favmovies);

//remove the first item from the array using shift in node js
var first=favmovies.shift();
console.log(first);
console.log(favmovies);


