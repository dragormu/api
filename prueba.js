var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'mybd',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
var query = connection.query('INSERT INTO admin(username,password) VALUES (?,?)',['12','12'], function(error, result){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
 }
);
connection.end();