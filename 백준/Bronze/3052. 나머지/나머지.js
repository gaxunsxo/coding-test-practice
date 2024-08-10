let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");;

// 3052: 나머지
arr = [];

// 각 입력을 42로 나눈 나머지를 저장 
for (let i = 0; i < 10; i++) 
  arr.push(input[i] % 42);

// 집합의 원소 개수를 출력 
let mySet = new Set(arr);
console.log(mySet.size);