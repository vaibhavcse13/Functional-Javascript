


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