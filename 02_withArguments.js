// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02

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