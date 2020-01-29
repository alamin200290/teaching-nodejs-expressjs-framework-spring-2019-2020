"use strict"

 //a = 10;
 var b = 30;
 //let c = 40;
//var array = ['alamin','CS',12];
/*function sum(a=0,b=0){
	return a+b;
}
var a = function(){
	return b();
}
var b = ()=> {return 1+2;}
document.write(a());
*/

/*var person ={};
person.age = 12;
person.name= "alamin";
person.dept = "CS";*/

/*var person ={
	name:'alamin',
	age: 11,
	dept: "CSE",
	getName: function(){
		return this.name;
	}
}


*/

/*function student(name="", age=0, dept=""){
	this.name=name;
	this.age = age;
	this.dept = dept;
}

var s1 = new student('alamin');
var s2 = new student('aaa', 33);
*/

function student(){
	return {
		name: 'alamin',
		age: 11,
		dept: "CSE",
		getName: function(){
			return {
				version: 2.1,
				getVersion: function(){
					return this.version;
				}
			}
		}
	}
}

var s1 = student();
//document.write(s1.getName().getVersion());
document.write(s1['getName']()['getVersion']());



