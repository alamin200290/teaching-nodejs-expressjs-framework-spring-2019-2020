var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){

	if(req.body.uname == req.body.password){

		res.cookie('username', req.body.uname);
		//req.session.username = req.body.uname;
		res.redirect('/home');
	}else{
		res.send('invalid username/password');
	}
});

module.exports = router;