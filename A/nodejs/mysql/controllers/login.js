var express = require('express');
var db = require.main.require('./models/db');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){

	var sql ="SELECT * FROM user where username='"+req.body.uname+"' and password='"+req.body.password+"'";
	db.getResults(sql, function(results){
	 	
	 	if(results.length > 0){
			res.cookie('username', req.body.uname);
			req.session.abc = results[0];
			res.redirect('/home');
		}else{
			res.send('invalid username/password');
		}
	});
});

module.exports = router;