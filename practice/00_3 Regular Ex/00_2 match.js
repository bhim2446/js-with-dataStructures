// type 1: Example 1
"Hello, World!".match(/Hello/);

//Example 2
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ma=ourStr.match(ourRegex);
console.log(ma);

//Example 3
console.log('string'.match(/regex/));
console.log(/regex/.test('string'));

//type 2 g:To search or extract a pattern more than once, you can use the global search flag(g)
//Example 4
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);

//Example 5
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result1 = quoteSample.match(alphabetRegex); // Change this line
console.log(result1,result1.length);

//Exaple 6 match few charector as posible
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/g; // Change this line
let result2 = text.match(myRegex);
console.log(result2);

//Exaple 7 username matching
function validateUsername(username) {
    const regex = /^[a-zA-Z]([a-zA-Z]+)?\d*$/;
    return regex.test(username);
  }
  
  // Test cases
  console.log(validateUsername("Jack")); // true
  console.log(validateUsername("J2")); // false
  console.log(validateUsername("J2K3")); // false
  console.log(validateUsername("Jack123")); // true
  console.log(validateUsername("Jo3")); // true
  console.log(validateUsername("123Jack")); // false
  console.log(validateUsername("J1")); // false
  console.log(validateUsername("Jo")); // true
  