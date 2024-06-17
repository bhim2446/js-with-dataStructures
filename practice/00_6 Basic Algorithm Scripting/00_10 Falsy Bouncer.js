// Falsy Bouncer
// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.
function bouncer(arr) {
    const result=[];
    let n=arr.length;
    for(let i=0; i<n; i++)
    {
      if(arr[i]){
        result.push(arr[i]);
      }
      
    }
    return result;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));