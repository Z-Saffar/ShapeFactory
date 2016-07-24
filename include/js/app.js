/** Created by Meghdad Hadidi 
  * 2016-07-24
  * Email: meghdad.1987@gmail.com 
***/

// Initializing Core Module
var Shapes = Core.getInstance();


// Logger Module 
var Logger = function(){

	this.show = function(type, data, object){
    	console[type](data, object);
    	document.getElementById('console').innerHTML = document.getElementById('console').innerHTML+'<p>'+data+'</p>';
    };

};

var logger = new Logger();


// Get user input and create triangle
var button = document.getElementById('button');
button.onclick = function(e){
	e.preventDefault();

	document.getElementById('console').innerHTML = '';

	let a = document.forms.form.a.value;
	let b = document.forms.form.b.value;
	let c = document.forms.form.c.value;

	Shapes.create(a, b, c);
}