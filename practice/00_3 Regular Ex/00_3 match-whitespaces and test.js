// Match Whitespace
// The challenges so far have covered matching letters of the alphabet and numbers. 
// You can also match the whitespace or spaces between letters.

// You can search for whitespace using \s, which is a lowercase s. 
// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
//  You can think of it as similar to the character class [ \r\t\f\n\v].

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);