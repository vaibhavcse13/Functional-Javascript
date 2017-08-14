

var numbers = [ 1, 2, 3, 4, 5 ]

var evenNumber = numbers.filter(function(element){
	
	if(element % 2 === 0 ){

		return element;
	}
	
});

console.log(evenNumber);