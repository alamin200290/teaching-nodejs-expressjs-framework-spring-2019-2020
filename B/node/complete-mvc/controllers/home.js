var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');

router.get('/', function(req, res){
	
	if(req.cookies['username'] != null){
		
		userModel.getByUname(req.cookies['username'], function(result){
			res.render('home/index', {user: result});
		});

	}else{
		res.redirect('/logout');
	}
});

router.get('/alluser', function(req, res){

	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('home/alluser', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})

module.exports = router;

