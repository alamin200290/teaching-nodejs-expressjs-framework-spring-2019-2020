var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	var data ={
		name: 'atp-3',
		classroom: 'CL-6',
		obj2: {
			version: '4.8.4'
		}
	};
	res.render('home/index', data);
});

module.exports = router;

