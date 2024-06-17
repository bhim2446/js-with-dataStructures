// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


function confirmEnding(str, target) {
    let n=str.length-1;
    let m=target.length-1;
    for (let i=0; i<=m; i++)
    if (str[n-i]!=target[m-i]){
      return false;
    }
    return true;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Connor", "n"));
  console.log(confirmEnding("He has to give me a new name", "name"));
  console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
  