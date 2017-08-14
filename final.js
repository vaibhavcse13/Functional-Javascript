//@author vaibhav shukla

// debug functionality 

 function printDebugMessage(message , MODE){

//// rename the console.log function 
 	var print =console.log;
	print();
	print(" function in work");
    
    if(MODE){
 		print("DEBUG : " + message);
 	}else {
 		return undefined ;
 	}
 }

 var debug = printDebugMessage;

debug("Entering point into application" , true);

debug("Entering point into application" , false);




function sayXis1() { console.log("x is equal to 1") }

function sayXisBananas() { console.log("x is equal to 'Bananas'") }

function sayXisBetween0And10() { console.log("x is between 0 and 10") }


// function that will execute if certailn condition is meet 
function doIf(condition , func){

	if(condition){
		func()
	}
}

const x= 1;
doIf(x===1 , sayXis1);

doIf(x=== "Bananas", sayXisBananas);

doIf(x >= 0 && x <=10 , sayXisBetween0And10);


///function to execute binary function 

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}


function mul(x, y) {
  return x * y
}

function div(x, y) {
  return (x /y).toFixed(2);
}

function binary(first , second , func){

	return func(first, second)
} 

console.log(binary(2,3,add));

console.log(binary(2,3,subtract));

console.log(binary(2,3,mul));

console.log(binary(2,3,div));

// function that except two function as a arument and one conditon and execute the function 
// on the basis of predicate

function ifElse (conditon , first , second ){

	if(conditon){

		first()
	}else{

		second()
	}
}

// counter 

const myCounter = {
  count: 0,
  increment: function() {
    this.count += 1
  },
  currentValue: function() {
    return this.count
  } ,

   decrement : function(){

   	count = count - 1;
   }
}


// function that limit the execution 

function doIfSafe(n, message, func) {
  if (n != null && typeof n === 'number') {
    if (message != null && typeof message === 'string') {
      return func(n, message)
    }
  }
}

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  return string.charAt(n)
}

function getSubstringOfLength(n, string) {
  return string.substring(0, n)
}

doIfSafe(4, "Banana", printMessageNTimes) // prints "Banana Banana Banana Banana"
doIfSafe(2, "Javascript", getNthLetter) // 'v'
doIfSafe(5, "Hello and welcome", getSubstringOfLength) // "Hello"

// safe version of limit function 


function createSafeVersion(func) {
  return function(n, message) {
    if (n != null && typeof n === 'number') {
      if (message != null && typeof message === 'string') {
        return func(n, message)
      }
    }
  }
}

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  return string.charAt(n)
}

function getSubstringOfLength(n, string) {
  return string.substring(0, n)
}

var printMessageNTimesSafe = createSafeVersion(printMessageNTimes)
var getNthLetterSafe = createSafeVersion(getNthLetter)
var getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength)

printMessageNTimesSafe(4, "Banana") // prints "Banana Banana Banana Banana"
getNthLetterSafe(2, "Javascript") // 'v'
getSubstringOfLengthSafe(5, "Hello and welcome") // "Hello"

getNthLetterSafe("two", "Javascript")

// map function implementation 

var numbers = [ 1, 2, 3, 4, 5 ];

var cubeOfNumber =  numbers.map( function(n){

	return n*n*n;
});

console.log(cubeOfNumber);

// array filter function 

var evenNumber = numbers.filter(function(element){
	
	if(element % 2 === 0 ){

		return element;
	}
	
});

console.log(evenNumber);

/// getting the employee whose salary less tan 7000 

var employees = [
  { name: "John",  salary: 50000  },
  { name: "Susan", salary: 60000  },
  { name: "Greg",  salary: 100000 },
  { name: "Mary",  salary: 120000 }
]


var raise =  employees.filter(function(employee){

	return employee.salary < 70000;
	
});

console.log(raise);

// some & every 
var numbers = [ 2, 4, 6, 8, 9, 12 ]


var arrayContainsEven = numbers.some(function(element){

	return (element % 2 === 0 );
});

var isEvenArray = numbers.every(function(element){

	return (element % 2 === 0 );
});

console.log(arrayContainsEven);
console.log(isEvenArray);

// reduce methood 
var shoppingList = [
  { name: "Eggs",    price: 4.99 },
  { name: "Milk",    price: 3.99 },
  { name: "Bananas", price: 2.79 },
  { name: "Beer",    price: 6.99 }
]

var totalCost = shoppingList.reduce(function(acc , list){

	return acc + list.price;
},0);

console.log(totalCost);

// extracting ages from array
// Learning Functional Programming with Javascript
// Chapter 03, Video 06, Exercise 01


var employees = [
  { name: "John",   salary: 60000,  age: 27, gender: 'M' },
  { name: "Mary",   salary: 110000, age: 50, gender: 'F' },
  { name: "Susan",  salary: 50000,  age: 21, gender: 'F' },
  { name: "Greg",   salary: 100000, age: 45, gender: 'M' },
  { name: "Jerry",  salary: 90000,  age: 39, gender: 'M' },
  { name: "Barb",   salary: 95000,  age: 36, gender: 'F' }
]

var males  =  employees.filter(function(emp){

	return emp.gender ="M"
});

var maleAges = males.map(function(emp){
	return emp.age;
})
console.info(males);
var age =  maleAges.reduce(function(acc,age){
	return acc + age ;
});

console.info(age);

var avm =  age / males.length ; 

var females =  employees.filter(function(emp){
	return emp.age = "F"
})

var femaleAges =  females.map(function(emp){

	return  emp.age
});

var fAges =  femaleAges.reduce(function(acc,age){

	return  acc + age
});

var avf =  fAges / females.length

console.log(avm);
console.log(avf);

function loop(i) {
  console.log("i is " + i)
  if (i < 10) {
    loop(i + 1)
  }
}

loop(0)
