let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");;

// 3052: 나머지
arr = [];
for (let i = 0; i < 10; i++) 
  arr.push(input[i] % 42);

let mySet = new Set(arr);
console.log(mySet.size);