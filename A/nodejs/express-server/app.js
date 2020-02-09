var express = require('express');
var app = express();

app.get('/login', function(req, res){
	res.send('hello world!!!');
});

app.post('/login', function(req, res){
	res.send('posted');
});

app.listen(3000, function(){
	console.log('express server started at 3000');
});
