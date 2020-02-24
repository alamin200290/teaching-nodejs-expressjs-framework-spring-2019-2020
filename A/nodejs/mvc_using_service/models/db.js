var mysql      = require('mysql');

var getConnection = function( callback ){
	var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  user     : 'root',
	  password : '',
	  database: 'node1'
	});

	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    callback(null);
	  }
	  console.log('connected as id ' + connection.threadId);
	  callback(connection);
	});
};


module.exports ={
	getResults: function(sql, params, callback){
		getConnection(function(connection){
			if(params != null){
				connection.query(sql, params, function (error, results) {
					if(results.length != 0){
						callback(results);
					}else{
						callback([]);
					}
				});
			}else{
				connection.query(sql, function (error, results) {
					if(results.length != 0){
						callback(results);
					}else{
						callback([]);
					}
				});
			}
			connection.end(function(err) {
				console.log('connection end!');
			});
		});
	},
	execute: function(sql, callback){
		getConnection(function(connection){

			if(params != null){
				connection.query(sql, params, function (error, status) {
					if(status){
						callback(true);
					}else{
						callback(false);
					}
				});
			}else{
				connection.query(sql, function (error, status) {
					if(status){
						callback(true);
					}else{
						callback(false);
					}
				});
			}
			connection.end(function(err) {
				console.log('connection end!');
			});
		});
	}

};



