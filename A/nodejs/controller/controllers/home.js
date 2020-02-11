var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	var data ={
		name: 'alamin',
		id: '22-334-3',
		data2:{
			version: 2
		}
	};	
	res.render('home/index', data);
});

module.exports = router;