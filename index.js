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

console.log("===== Functions =====");

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
console.log("===== JavaScript Objects =====");

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
console.log("===== Arrays and array functions =====");

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


//===== Booleans ======
console.log("===== Booleans =====");

var t = true;
console.log(typeof t);
//boolean
console.log(t);
//true

var f = false
console.log(typeof f);
//boolean
console.log(f);
//false

var n = 5 == 5;
console.log(n);
//true

var m = 5 == 7;
console.log(m);
//false

var lt = 5 < 7;
console.log(lt);
//true

var gt = 5 > 7;
console.log(gt);
//false

var le = 5 <= 7;
console.log(le);
//true

var ge = 5 >= 7;
console.log(ge);
//false


//===== Conditional Statements ====
console.log("===== Conditional Statements =====");

if (8 > 5) {
	console.log("8 is greater than 5");
}
//8 is greater than 5

if (8 > 13) {
	console.log("8 is greater");
} else {
	console.log("8 is not greater than 13");
}

var x = 10;
var y = 8;
var z = 12;
function check_x(p1, p2){
	if (p1 > p2) {
		console.log(p1 +" is greater than " + p2);
	} else if (p1 == p2){
		console.log(p1 +" is equal " + p2);
	} else {
		console.log(p2 +" is greater than " + p1);
	}
}

check_x(y, x);
check_x(y, y);
check_x(x, z);

var oddEven = function(number){
	if (number % 2 == 0){
		console.log(number +" is even");
	} else {
		console.log(number +" is odd");
	}
}
oddEven(6);

//===== Switch Statement =====
console.log("===== Switch Statement =====");

var n3 = 3;

switch(n3){
	case 1:
		console.log("The number is One");
		break;
	case 2:
		console.log("The number is Two");
		break;
	case 3:
		console.log("The number is Three");
		break;
	default:
		console.log("The number is " + n3);
		break;
}
//The number is Three


//===== For Loops =====
console.log("===== For Loops =====");

for (var i=0; i<5; i++){
	console.log(i);
} 

var friends = ["Ross", "Rachel", "Chandler", "Monica", "Phoebe", "Joei"];
for(var i=0; i<friends.length; i++){
	console.log(friends[i]);
}

//===== While =====
console.log("===== While Loop =====");

var index = 0;
while (index<friends.length){
	console.log(friends[index]);
	index++;
}

console.log("===== Do Loop =====");

index = 0;
do{
	console.log(friends[index]);
	index++;
}while(index<friends.length);





































