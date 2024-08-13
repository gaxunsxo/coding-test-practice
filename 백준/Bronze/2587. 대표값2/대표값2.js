let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 2587: 평균, 중앙값 구하기 
let arr = [];
let sum = 0;
for (let i = 0; i < input.length; i++) {
  arr.push(Number(input[i]));
  sum += arr[i];
}
arr.sort((a, b) => a - b);

let median = parseInt(arr[2]);
let mean = Math.floor(sum / 5);

console.log(mean);
console.log(median);