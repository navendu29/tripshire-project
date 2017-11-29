var express = require('express')
var app = express()
var fs = require("fs");
var bodyParser = require('body-parser');
//app.use(express.bodyParser());
var mysql = require('mysql')
var nodemailer = require('nodemailer');
var uuid = require('node-uuid');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	window.location = "file:///C:/nodejs/mcqTest.html"
	
	
	
	
     var q1 = window.document.getElementById("id1");
	 
     var q2 = window.document.getElementById("id2");
	 
     var q3 = window.document.getElementById("id3");
         	 
	var q4 = window.document.getElementById("id4");
         	 
		var q5 = window.document.getElementById("id5");
         	 
		var q6 =window.document.getElementById("id6");
         	
		var q7 = window.document.getElementById("id7");
         	 
		var q8 = window.document.getElementById("id8");
         	 
		var q9 = window.document.getElementById("id9");
         	 
		var q10 = window.document.getElementById("id10");
         	 
	     	 
		var q11 = window.document.getElementById("id11");
         	 
	     	 
		var q12= window.document.getElementById("id12");
         	 
	     	 
	





    var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: '',
	  database: 'first'
	})

	connection.connect(function(err) {
	  if (err) throw err
	  
	connection.query('SELECT * FROM question', function(err, results) {
		   
	 
	if (err) throw err
	
  Math.floor((Math.random() * 5) + 1);		 
     q1.innerHTML=result[0].ques;
	 q2.innerHTML=result[0].op1;
	 q3.innerHTML=result[0].op2;
	 q4.innerHTML=result[0].op3;
	 
	 







		
	
			
	console.log("converted");
		  
	});
	

	})











  

