var ex = require('express')
var app = ex()
app.get('/',function(req,res){
	res.send("Home page");
	})
app.get('/cse/',function(req,res){
	res.send("Welcome to cse");
	})
app.get('/IT/',function(req,res){
	res.send("Welcome to IT");
	})
app.get('/AI&DS/',function(req,res){
	res.send("Welcome to AI&DS");
	})
app.get('/CIVIL/',function(req,res){
	res.send("Welcome to CIVIL");
	})




console.log("server started");
var server=app.listen(7700,function(){
})