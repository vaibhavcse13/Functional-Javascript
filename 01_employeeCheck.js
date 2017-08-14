


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