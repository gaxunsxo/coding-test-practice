let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCases = Number(input[0]);
let answer = "";

for (let i = 1; i <= testCases; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  answer +=  String(a + b + '\n');
}

console.log(answer);