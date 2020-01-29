"use strict"

/*var C =20;
let c= 30;

var a = ['12','34','56'];
*/

/*function sum(a=0, b=0){
	return a+b;
}

sum()

document.write();*/

/*var a = function (a=0, b=0){
	return a+b;
}

var c = (a=0, b=0)=>{ 
	var xyz=10;
	return a+b;
}

var b = function(a){
	document.write(a());	
}
b(a());
*/


/*var person = {
	name : 'alamin',
	id: '11111111',
	age: 33,
	dept:'CSE',
	getName: function(){
		return this.name;
	}
};

var person1 = {
	name : 'alamin',
	id: '11111111',
	age: 33,
	dept:'CSE',
	getName: function(){
		return this.name;
	}
};*/

/*function Student(name="", dept="", age=0){
	this.name = name;
	this.dept = dept;
	this.age = age;
}	

var s1 = new Student('test');
var s2 = new Student('test', 'SE');
*/

function person(){
	return {
		name: 'alamin',
		age: 11,
		dept: "SE",
		getDetails: function(){
			return {
				version: 3.3,
				getVersion: function(){
					return this.version;
				}
			}
		}
	}
}

var p1 = person();
//document.write(p1['getDetails']()['getVersion']());
//document.write(p1.getDetails().getVersion());


