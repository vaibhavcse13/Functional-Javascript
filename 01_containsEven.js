
var numbers = [ 2, 4, 6, 8, 9, 12 ]


var arrayContainsEven = numbers.some(function(element){

	return (element % 2 === 0 );
});

var isEvenArray = numbers.every(function(element){

	return (element % 2 === 0 );
});

console.log(arrayContainsEven);
console.log(isEvenArray);
