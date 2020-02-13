var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	//req.session.username != null	
	if(req.cookies['username'] != null){

			var data ={
				username: req.cookies['username'],
				name: 'atp-3',
				classroom: 'CL-6',
				obj2: {
					version: '4.8.4'
				}
			};
	
		res.render('home/index', data);
	}else{
		res.redirect('/logout');
	}
	
});

module.exports = router;

