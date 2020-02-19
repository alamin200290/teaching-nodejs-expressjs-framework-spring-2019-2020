var express = require('express');
var router = express.Router();
var mysql      	= require('mysql');

router.get('/', function(req, res){
	
	console.log(req.session);	
	/*if(req.cookies['username'] != null){		
		res.render('home/index', {user: req.session.abc});
	}else{
		res.redirect('/logout');
	}*/
});

router.get('/alluser', function(req, res){

var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'node1'
	});


	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	  console.log('connected as id ' + connection.threadId);
	});

	var sql = "SELECT * FROM user";
	connection.query(sql, function (error, results) {
		if(!error){
			res.render('home/alluser', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});

	connection.end(function(err) {
	 console.log('connection closed!');
	});

})

module.exports = router;

