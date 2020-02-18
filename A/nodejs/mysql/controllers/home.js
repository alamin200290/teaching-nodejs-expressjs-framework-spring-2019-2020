var express = require('express');
var router = express.Router();
var db = require.main.require('./models/db');

router.get('/', function(req, res){

	//req.session.username != null

	if(req.cookies['username'] != null){
		var data = {
			user: req.session.abc
		}
		res.render('home/index', data);
	}else{
		res.redirect('/login');
	}
});

router.get('/view_users', function(req, res){
	
	var sql ="SELECT * FROM user";
		db.getResults(sql, function(results){
			if(results.length > 0){
				res.render('home/view_users', {userlist: results});
			}else{
				res.redirect('/home');
			}
		});
});



module.exports = router;