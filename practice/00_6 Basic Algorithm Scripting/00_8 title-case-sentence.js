// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    // Split the string into an array of words
      const words = str.split(' ');
    
      // Iterate through each word in the array
      const capitalizedWords = words.map(word => {
        // Capitalize the first letter and concatenate with the rest of the word in lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
    
      // Join the array back into a single string
      return capitalizedWords.join(' ');
    }
    
    // Example usage
    console.log(titleCase("I'm a little tea pot")); // Output: "I'm A Little Tea Pot"
    console.log(titleCase("sHoRt AnD sToUt")); // Output: "Short And Stout"
    console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Output: "Here Is My Handle Here Is My Spout"