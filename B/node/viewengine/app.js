//declaration
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var login = require('./controllers/login');
var home = require('./controllers/home');
var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use('/login', login);
app.use('/home', home);


//routes
app.get('/', function(req, res){
	res.render('index');
});

//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});


