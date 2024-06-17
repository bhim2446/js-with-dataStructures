// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    bubbleSort(arr);
    let n=arr.length;
    for(let i=0; i<n; i++){
      if(arr[i]>=num){
        return i;
      }
    }
    return n;
  }
  
  function bubbleSort(arr) 
  {
    let n = arr.length;
    let swapped;
  
    for (let i = 0; i < n - 1; i++) 
    {
      swapped = false;
      for (let j = 0; j < n - 1 - i; j++) 
      {
        if (arr[j] > arr[j + 1]) 
        {
          // Swap the elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
      
        }
      }
      // If no elements were swapped, the array is already sorted
      if (!swapped) 
      {
        break;
      }
    }
    return arr;
  }
  
  // console.log(getIndexToIns([40, 60], 50));
  // console.log(getIndexToIns([5, 3, 20, 3], 5));
  console.log(getIndexToIns([], 1));