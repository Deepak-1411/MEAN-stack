var sql = require("mysql");

var dbConfig = {
    server: "localhost",
    database: "nodeproject",
    user: "root",
    password: "sher@lock",
    port: 3306
};

function getEmp() {
    var conn = new sql.Connection(dbConfig);
    
    conn.connect().then(function () {//then is nothing but come inside the promises
        var req = new sql.Request(conn);
        req.query("SELECT * FROM persons").then(function (recordset) {
            console.log(recordset);
            conn.close();
        })
        .catch(function (err) {
            console.log(err);
            conn.close();
        });        
    })
    .catch(function (err) {
        console.log(err);
    });
    }

getEmp();