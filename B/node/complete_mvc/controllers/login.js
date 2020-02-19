var express 	= require('express');
var router 		= express.Router();
var db			= require.main.require('./models/db');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
		
		var sql = "SELECT * FROM user WHERE username='"+req.body.uname+"' and password='"+req.body.password+"'";
		db.getResult(sql, function(result){

			if(result != null){
				//console.log(result);
				req.session.abc = result;
				res.cookie('username', user.username);
				
				res.redirect('/home');
			}else{
				res.redirect('/login');
			}
		});


});

module.exports = router;

