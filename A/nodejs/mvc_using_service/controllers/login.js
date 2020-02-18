var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){

	var user ={
		username: req.body.uname,
		password: req.body.password
	};

	userModel.validate(user, function(status){
	 	if(status){
			res.cookie('username', req.body.uname);
			res.redirect('/home');
		}else{
			res.send('invalid username/password');
		}
	});
});

module.exports = router;