// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

console.log(maximus);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);