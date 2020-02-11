var express = require('express');
var ejs = require('ejs');
var app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send('Welcome');
});

app.get('/login', function(req, res){
	res.render('login/index');
});

app.get('/home', function(req, res){

	var data ={
		name: 'alamin',
		id: '22-334-3',
		data2:{
			version: 2
		}
	};
	
	res.render('home/index', data);
});

app.post('/login', function(req, res){
	res.send('posted!')
});

app.listen(3000, function(){
	console.log('node server started at 3000!');
});