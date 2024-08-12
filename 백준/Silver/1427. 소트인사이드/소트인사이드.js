let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

// 1427: 소트인사이드 
let numbers = [];
for (let i = 0; i < input.length; i++) {
  numbers.push(Number(input[i]));
}
numbers.sort((a, b) => b - a);

let answer = "";
for (let i = 0; i < numbers.length; i++) {
  answer += numbers[i];
}

console.log(answer);