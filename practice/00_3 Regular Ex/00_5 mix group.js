rex = /\w+/;
str = " ";
result=rex.test(str);
m = str.match(rex);
console.log(result, m);

