function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  // Only change code above this line
  console.log(countdown(10));

  function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));

  function rangeOfNumbers(startNum, endNum) {
    if(startNum == endNum){
      return [startNum];
    }
    else{
      const array=rangeOfNumbers(startNum+1, endNum);
      array.unshift(startNum);
      return array;
    }
  };
  console.log(rangeOfNumbers(4, 9));