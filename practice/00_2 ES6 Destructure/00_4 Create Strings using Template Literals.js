// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
//   };
  
//   function makeList(arr) {
//     return arr.map(item => `<li class="text-warning">${item}</li>`);
//   }
  
//   const failureItems = makeList(result.failure);
  
//   console.log(failureItems);
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i=0; i<arr.length; i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  
  
  console.log(failuresList);
  