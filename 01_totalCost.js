

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