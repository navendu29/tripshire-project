var express = require('express')
var app = express()
var fs = require("fs");
var bodyParser = require('body-parser');
//app.use(express.bodyParser());
var mysql = require('mysql')
var nodemailer = require('nodemailer');
var uuid = require('node-uuid');
//app.use(express.bodyParser());
//app.use(express.bodyParser());
app.get('/', function (req, res) {
 
    var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: '',
	  database: 'first'
	})

	connection.connect(function(err) {
	  if (err) throw err
	  
	connection.query('SELECT * FROM details', function(err, results) {
		   
	 
	if (err) throw err
	var flag=false;
	for(var i=0;i<results.length;i++){
			
		if(req.query.email==results[i].email)
		{res.send('<p>email'+results[i].email+'<br>marks '+results[i].marks+' <br>test status'+results[i].teststatus+' <br link>'+results[i].links+'</p>');
	flag=true;
		break;
		}
	}
			
if(flag==false)
{res.send("not being interviewed yet");}
	console.log("converted");
		  
	});
	
	
	
	});

	  
	   
})


app.get('/sendlink', function (req, res) {
 
  var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'first'
  })

   //console.log(req.body.email1);
	

	connection.connect(function(err) {
	  if (err) throw err
	  console.log('You are now connected...');
	  
	 // var mm=req.query.email1;
	 
	 
//	 var email_id  =  req.body.user.email ;
	// console.log(req.body.user.email1);
	    console.log(req.query.email);
var email_id=req.query.email;
//connection.query("INSERT INTO emails email,link VALUES('email','hello')", function(err, result) {





// Generate a v1 (time-based) id
var timeBasedID = uuid.v1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'

// Generate a v4 (random) id
var randomID = uuid.v4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'

var url = 'http://127.0.0.1:8081/taketest/' + randomID;


console.log(url);




	    var records = [
    [req.query.email,url, 0,0]
    
  ];
 
	//  var sql='INSERT INTO emails (email,link) VALUES('+ req.query.email +')';
		 connection.query("INSERT INTO details VALUES ?", [records], function(err, results) {
		   if (err) throw err
			//else res.send('<a href="form.html">http://127.0.0.1:8081/'+randomID+'</a>')			
				
				
				
				
				
				var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tripwork2@gmail.com',
    pass: 'tripship'
  }
});

var mailOptions = {
  from: 'tripship@gmail.com',
  to: req.query.email,
  subject: 'Sending Email using Node.js',
  text:url
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
		  
		});
		 
	});

})

app.get("/taketest/:userlink", function(req, res){
  
  
  
		 console.log("hello");

  
  
    var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: '',
	  database: 'first'
	})
  var url='http://127.0.0.1:8081/taketest/'+req.params.userlink;
  connection.connect(function(err) {
	  if (err) throw err
	  
	connection.query('SELECT * FROM details where links= '+ mysql.escape(url), function(err, results) {
	

	if (err) throw err
	
	
	 if(results[0].teststatus==0)
	 {
	   	 
		 console.log("hello");

	
	  
	connection.query('SELECT * FROM question', function(err, results) {
		   
		   
		   
		   
		   var arr = []
while(arr.length < 3){
    var randomnumber = Math.floor(Math.random()*5) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
		   
		   
		var v1=     arr[0];	
	 
		var v2=    arr[1];	
	 
		var v3=     arr[2];	
	 
	if (err) throw err
	
	console.log(v1);
	
  res.send('<html><body><p>'+req.params.userlink+' <form  action="http://127.0.0.1:8081/calculatemarks/'+req.params.userlink+'" method="get" id="form1"><p id="id1">'+results[v1].ques+'</p><BR><input id="id2" type="radio"  value="'+results[v1].op1+'">'+results[v1].op1+'</br><input id="id3" type="radio"  value="'+results[v1].op2+'">'+results[v1].op2+'<BR><input id="id4" type="radio"  value="'+results[v1].op3+'">'+results[v1].op3+'<BR><p id="id5">'+results[v2].ques+'</p><BR><input id="id6" type="radio"  value="'+results[v2].op1+'">'+results[v2].op1+'</br><input id="id7" type="radio"  value="'+results[v2].op2+'">'+results[v2].op2+'<BR><input id="id8" type="radio"  value="'+results[v2].op3+'">'+results[v2].op3+'<BR><p id="id9">'+results[v3].ques+'</p><br><input id="id10" type="radio"  value="'+results[v3].op1+'">'+results[v3].op1+'</br><input id="id11" type="radio"  value="'+results[v3].op2+'">'+results[v3].op2+'<BR><input id="id12" type="radio"  value="'+results[v3].op3+'">'+results[v3].op3+'<BR><input id="ans" name="SelectedValues" type="text">    <input type = "Button" id="btn" value = "Submit"><input type="submit" value="submit"></input></form><script>document.getElementById("btn").onclick = function() { var val=""; val+=document.getElementById("id1").innerHTML+";";if(document.getElementById("id2").checked){val+=document.getElementById("id2").value+";";}else if(document.getElementById("id3").checked){val+=document.getElementById("id3").value+";";}else{val+=document.getElementById("id4").value+";";}val+=document.getElementById("id5").innerHTML+";";if(document.getElementById("id6").checked){val+=document.getElementById("id6").value+";";}else if(document.getElementById("id7").checked){val+=document.getElementById("id7").value+";";}else{val+=document.getElementById("id8").value+";";}val+=document.getElementById("id9").innerHTML+";";if(document.getElementById("id10").checked){val+=document.getElementById("id10").value+"";}else if(document.getElementById("id11").checked){val+=document.getElementById("id11").value+"";}else{val+=document.getElementById("id12").value+";";}document.getElementById("ans").value=val; }</script></body></html>'
  );  
  
	
			
	console.log("converted");
		  
	});
	



		 
	 }
	 else{
		 
     res.send("marks"+results[0].marks+"");		 
		 
	 }
	 
	 
		  
	});
	
	
	
	});

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
});


app.get("/calculatemarks/:userlink", function(req, res){

console.log(req.query.SelectedValues+"");
console.log("coolboy");



var s=req.query.SelectedValues.split(";");
var s1=s[0]+"";
var s2=s[2]+"";
var s3=s[4]+"";
var mar=0;

console.log(s);

    var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: '',
	  database: 'first'
	})

	connection.connect(function(err) {
	  if (err) throw err
	
var url='http://127.0.0.1:8081/taketest/'+req.params.userlink;

//var sql = "UPDATE details SET teststatus = "1" WHERE link ='+mysql.escape(url);
  connection.query('UPDATE details SET teststatus = 1 WHERE links ='+mysql.escape(url), function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
  	connection.query('UPDATE details SET marks ="2" WHERE links = '+ mysql.escape(url), function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });

	
	 
	connection.query('SELECT * FROM question where ques='+ mysql.escape(s1), function(err, results) {

    console.log(results[0]);
console.log("ssssss");
	console.log(s1);
console.log("ssssss");

	var x=results[0].ans+"";
	console.log(results[0].ans);
	console.log(s[1]);
console.log("sssssshello");
	var t=s[1]+"";
	console.log(x==t);
	if(x==t)
	{mar=mar+1;


console.log(mar);

	console.log("success");
	}			
	 
	});
	connection.query('SELECT * FROM question where ques='+ mysql.escape(s2), function(err, results) {
		   
	
	
		if(results[0].ans==s[3])
		{
			mar=mar+1;
			
				console.log(mar);

			}
	
	
	
	
	
	});
	connection.query('SELECT * FROM question where ques='+ mysql.escape(s3), function(err, results) {
		   
	 
	
	
		if(results[0].ans==s[5])
		{mar=mar+1;
		console.log(mar);

	}
	
console.log(mar+"hello");
	res.send("marks out of 3 "+mar);
	
	});

/*		connection.query('UPDATE details SET marks ="2" WHERE links = '+ mysql.escape(url), function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
*/	
	
	
	
	
//mar=mar+"";

	
	
	});

	





console.log("mar"+mar);

});




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)  
});


