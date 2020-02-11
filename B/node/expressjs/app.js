var express = require('express');
var app = express();

app.get('/login', function(req, res){
	console.log('login page requested!');
	res.send('login page requested!');
});

app.listen(3000, function(){
	console.log('server started at 3000!');
});


