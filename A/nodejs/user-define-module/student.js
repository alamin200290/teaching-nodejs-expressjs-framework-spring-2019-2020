/*var name = "abc";
var id= "11111-111-1";

var getName = function(){
	return name;
}

module.exports.name = name;
module.exports.id = id;
module.exports.getName = getName;*/

/*module.exports = {
	name: 'alamin',
	age: '11',
	dept: 'SE',
	getName: function(){
		return this.name;
	}
};*/

module.exports = function(){

	return {
		name: 'alamin',
		age: 12,
		dept: 'SE',
		getName: function(){
			return this.name;
		}
	}
}

