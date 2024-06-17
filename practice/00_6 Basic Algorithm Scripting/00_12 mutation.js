// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
    // Convert both strings to lowercase
    let firstStr = arr[0].toLowerCase();
    let secondStr = arr[1].toLowerCase();
  
    // Check if every character in secondStr is present in firstStr
    for (let i = 0; i < secondStr.length; i++) {
      if (firstStr.indexOf(secondStr[i]) === -1) {
        return false; // If a character is not found, return false
      }
    }
  
    return true; // If all characters are found, return true
  }
  
  // Test cases
  console.log(mutation(["hello", "Hello"])); // Output: true
  console.log(mutation(["hello", "hey"]));   // Output: false
  console.log(mutation(["Alien", "line"]));  // Output: true
  console.log(mutation(["floor", "for"]));   // Output: true