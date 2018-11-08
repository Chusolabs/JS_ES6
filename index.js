console.log(typeof document);
console.log(document);
//document.getElementById('example').innerHTML = 'Javascript Rules';

// single line comment

/*
   multi 
   line 
   comment
*/

var a, b;
a ='hello'; //asignment. we can use '' or "" to create a string
b = a + 'world'; //b = 'Hello world';

var c, d;
c = 1;
b = a + 5.5; //b= 6.5;

//we can initialize variables in the moment we create them
var e = 30;

//Snake Case notation - join words in variable names with underscores
// e.g.: var first_value = 20;

//Camel Case notation - capitalize first character of words (except the first one)
// e.g.: var firstValue = 20;

function print(){
	console.log("A working function!");
}
print();

function print2(message){
	console.log(message);
}
print2("An argument");

function print3(p1, p2, p3){
	console.log(p1 + p2 + p3);
}
print3("one,", "two,", "three");
print3(1,2,3);

var multiply = function(m1, m2){
	return m1*m2;
}
var product = multiply(2, 3);
console.log(product);

//=======================================================

var dog = {
	name: 'Buddy',
	breed: 'Golden Retriever',
	weight: 20,
	bark: function(){
		console.log("Guau!")
	}
};	
console.log(dog);
/*{name: "Buddy", breed: "Golden Retriever", weight: 20}
breed: "Golden Retriever"
name: "Buddy"
weight: 20
*/
console.log(dog.breed);
//Golden Retriever

console.log(dog["breed"]);
//Golden Retriever

dog.bark();
//Guau!

//======== Arrays and array functions =======

var points = [25, 16, 7, 9, 31];
console.log(points);
/*
(5) [25, 16, 7, 9, 31]
0: 25
1: 16
2: 7
3: 9
4: 31
length: 5
__proto__: Array(0)
*/

points.push(8);
console.log(points);
/*
(6) [25, 16, 7, 9, 31, 8]
0: 25
1: 16
2: 7
3: 9
4: 31
length: 5
__proto__: Array(0)
*/

var last = points.pop(); // this deletes the last element from array
console.log(last);
//8
console.log(points);
/*
(5) [25, 16, 7, 9, 31]
0: 25
1: 16
2: 7
3: 9
4: 31
length: 5
__proto__: Array(0)
*/

var first = points[0]; //accessing array elements (index starts at 0 for first element)
console.log(first);
//25
console.log(points);
/*
(5) [25, 16, 7, 9, 31]
0: 25
1: 16
2: 7
3: 9
4: 31
length: 5
__proto__: Array(0)
*/

console.log(points.length);
//5








