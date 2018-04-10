var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port:3306
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("DROP DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database eliminated");
  });
});