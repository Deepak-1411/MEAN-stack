//create databse in sql server using the node js 
//below the codes
//in this code we created the table named persons and add some data into it using the query of node js
var mysql= require('mysql');

var con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sher@lock',
    database:'mytestDB'
});
con.connect(function(err){
    if(err) throw err
console.log("connected!!");
con.query('CREATE TABLE Persons'+
'(PersonID int,'+
'LastName varchar(255),'+
'FirstName varchar(255),'+
'Address varchar(255),'+
'City varchar(255));',function(err,result){
    if(err) throw err;

con.query("insert into persons(PersonID,LastName,FirstName,Address,city)"+
"values(2,'snow','Jon','pete street','texes'),"+
"(1,'Carter','John','Birlin street','california'),"+
"(2,'miley','mike','new street','florida'),"+
"(3,'jorden','mike','king street','center street'),"+
"(4,'pyle','tibeet','down street','washington'),"+
"(5,'rahet','ali','kajaria street','masedonia'),"+
"(6,'holmes','sherlock','221b backer street','london')")
});
});