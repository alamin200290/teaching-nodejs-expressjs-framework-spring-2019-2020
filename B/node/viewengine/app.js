var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');

app.get('/login', function(req, res){
	console.log('login page requested!');
	//res.send('login page requested!');
	res.render('login/index');
});

app.listen(3000, function(){
	console.log('server started at 3000!');
});


