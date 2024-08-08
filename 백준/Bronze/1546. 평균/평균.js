let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let max = 0;
for (let i = 0; i < n; i++) {
  max = Math.max(arr[i], max);
}

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i] / max * 100;
}

console.log(sum / n);