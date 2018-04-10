var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mybd",
  port:3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE admin2(username varchar(255),password varchar(255))";
  con.query(sql,function(err,result){
  	if(err) throw err;
  	console.log("Table created");
  
  });
});

