var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
	
	if(req.body.uname == req.body.password){
		res.redirect('/home');
	}else{
		res.send('invalid username/password');
	}
});

module.exports = router;

