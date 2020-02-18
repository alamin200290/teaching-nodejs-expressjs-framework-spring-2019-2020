var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	//req.session.username != null

	if(req.cookies['username'] != null){
		var data ={
			username: req.cookies['username'],
			name: 'alamin',
			id: '22-334-3',
			data2:{
				version: 2
			}
		};	

		res.render('home/index', data);
	}else{
		res.redirect('/login');
	}
});

module.exports = router;