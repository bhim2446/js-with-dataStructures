// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let arr1=[];
    let n=arr.length;
    let i = 0;
    for (i=0; i<n-1; i+=size){
      arr1.push(arr.slice(i,i+size));
    }
    if(i<n){
      arr1.push(arr.slice(i));
    }
    return arr1;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));