//node working with the mysql

var mysql=require('mysql');

var con =mysql.createConnection({
    host:8080,
    user:"tiger",
    password:"scott"
});
con.connect(function(err){
    if (err) throw err;
    console.log("connected!")
})