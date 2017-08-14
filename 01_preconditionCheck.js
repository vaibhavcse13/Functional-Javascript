

/***************
function printMessageNTimes(n, message) {
  if (n != null && typeof n === 'number') {
    if (message != null && typeof message === 'string') {
      for (var i = 0; i < n; i++) { console.log(message) }
    }
  }
}

function getNthLetter(n, string) {
  if (n != null && typeof n === 'number') {
    if (string != null && typeof string === 'string') {
      return string.charAt(n)
    }
  }
}

function getSubstringOfLength(n, string) {
  if (n != null && typeof n === 'number') {
    if (string != null && typeof string === 'string') {
      return string.substring(0, n)
    }
  }
}

printMessageNTimes(4, "Banana") // prints "Banana Banana Banana Banana"
getNthLetter(2, "Javascript") // 'v'
getSubstringOfLength(5, "Hello and welcome") // "Hello"
***************************/

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  return string.charAt(n)
}

function getSubstringOfLength(n, string) {
  return string.substring(0, n)
}

// doInSafe message 

function doIfSafe(n , message , func){
if (n != null && typeof n === 'number' && typeof n!="undefined") {
    if (message != null && typeof message === 'string') {
      return func(n, message)
    }
  }
}

console.log(doIfSafe(3, "Javacript" , printMessageNTimes));
console.log(doIfSafe(4 , "Js come with magic" , getNthLetter));
console.log(doIfSafe(4 , "Js come with magic" , getSubstringOfLength));