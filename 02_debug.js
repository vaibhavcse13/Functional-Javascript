// debug functionality 

 function printDebugMessage(message , MODE){
    
    if(MODE){
 		console.log("DEBUG : " + message);
 	}else {
 		return undefined ;
 	}
 }


var debug = printDebugMessage;

debug("Entering point into application" , true);

debug("Entering point into application" , false);
