// You may have noticed that some freeCodeCamp challenges include their own console. 
// This console behaves a little differently than the browser console.

// There are many methods to use with console to output messages. 
// log, warn, and clear to name a few. The freeCodeCamp console will only output log messages, while the browser console will output all messages. 
// When you make changes to your code, it will automatically run and show the logs. 
// The freeCodeCamp console is then cleared each time your code runs.

// First, open your browser console so you can see the logs. 
// To do that, you can right-click the freeCodeCamp navigation bar at the top and click inspect on most browsers. 
// Then find the console tab in the window that opens.

// After that, use console.log to log the output variable. 
// View the two consoles to see the log. Finally, use console.
// clear after your log to clear the browser console. 
//View the difference in the two consoles.

// JavaScript recognizes seven primitive (immutable) data types: 
// Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), and one type for mutable items: Object. 
// Note that in JavaScript, arrays are technically a type of object.
let a = 4;
let b = 5;
console.log(a+b);
console.warn();
console.clear();

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
let myArray = [1, 2, 3];
    let arraySum = myArray.reduce((previous, current =>  previous + current));
    console.log(`Sum of array values is: ${arraySum}`);