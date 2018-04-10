'use strict'
var mongoose = require('mongoose')
var service=require('../servicios')
var mysql = require('mysql');
var Admin = require('../modelos/admin')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'mybd',
  port:3306
});

function signUp(req,res){
	var username = req.body['username']
	var password = req.body['password']
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  con.query('INSERT INTO admin(username, password) VALUES(?, ?)',[username,password], function (err, result) {
	    if (err) throw err;
	    res.status(200).send({message: "1 record inserted"});
	    res.status(200).send({result,token:service.createToken(username)});
	  });
	});
}

function signIn(req,res){
	var username = req.body['username']
	var password = req.body['password']
	con.connect(function(err) {
	  	if (err) throw err;
	  	con.query("SELECT * FROM admin where username = ? and password = ?",[username,password], function (err, result, fields) {
		    if (err) throw err;
		    console.log(result)
		    if(result!='')
		    	res.status(200).send({result,token:service.createToken(username)});
		    else
		    	res.status(404).send({message:"verifica tus datos"});
	  	}); 	
	});
}

module.exports ={
	signUp,
	signIn
}