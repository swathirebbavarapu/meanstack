var ex = require('express')
var app = ex()
app.get('/',function(req,res){
	res.send("Home page");
	})
app.listen(7700)