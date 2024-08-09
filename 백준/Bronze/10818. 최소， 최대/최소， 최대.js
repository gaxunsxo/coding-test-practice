let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let min = arr[0];
let max = arr[0];

for (let i = 0; i < n; i++) {
  max = Math.max(max, arr[i])
  min = Math.min(arr[i], min);
}

console.log(min, max);