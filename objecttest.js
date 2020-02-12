//Declairing object in node js
var myobject={};//this is the empty object

console.log(myobject) // it will print only braces because it is empty

var person={}; //empty now  lets fill with the data

person.firstname="Deepak";
person.lastname="Pal"; //this data should be put inside the object

console.log(person);

function fullname(){
    return ( person.firstname+' '+person.lastname)
}
console.log(fullname())

person.fullname=function(){
    return this.firstname +' '+this.lastname;
}

console.log(person);




//define property during declaration

var book={
title: 'Web development with mongodba and node js',
author:'Sherlock Holmes',
publisher:'Web series edition'
};

console.log(book.title) //printing data from the object
book.address="221B Baker Street"; //adding new property to the book

console.log(book.address);

//object can be nested with infinity possibilities as shown below

var Sherlock={
    name:'Deepak Pal'
};

var book1={
    title:'Unsolved mystries of the world',
    author:Sherlock,
    work:'culsultant detective'
}

console.log(book1.author.name)