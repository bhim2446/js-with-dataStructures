// test used to test wether the word in string for the regular exprestion.
//i - used to ignore the case for match

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result)