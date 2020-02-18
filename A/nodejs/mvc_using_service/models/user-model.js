var db = require('./db');

module.exports= {
	getById : function(id, callback){
		var sql = "select * from user where id="+id;
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql ="SELECT * FROM user where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByUname : function(username, callback){
		var sql = "select * from user where username='"+username+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	}
}