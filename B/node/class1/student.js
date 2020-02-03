/*var name = "alamin";
var age = 100;
var dept = "SE";

var printName = function (){
	console.log(name)
}

module.exports.name =name;
module.exports.age =age;
module.exports.print =printName;*/

/*module.exports ={
	name: 'alamin',
	age: 11,
	dept: 'CS',
	printName: function(){
		return this.name;
	}	
}
*/

module.exports = function(){
	return {
		name: 'alamin',
		age: 11,
		dept: 'CS',
		printName: function(){
			return this.name;
		}
	}
}