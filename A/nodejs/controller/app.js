//declaration
var express = require('express');
var login = require('./controllers/login');
var home = require('./controllers/home');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();

//configuration
app.set('view engine', 'ejs');


//middleware 
app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser());

app.use('/login', login);
app.use('/home', home);

//routes
app.get('/', function(req, res){
	res.send('Welcome');
});

//server startup
app.listen(3000, function(){
	console.log('node server started at 3000!');
});