let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let arr = input.split("\n").map(Number);

let max = arr[0];
let idx = 0;

for (let i = 0; i < 9; i++) {
  max = Math.max(max, arr[i])
  if (max == arr[i]) 
    idx = i + 1;
}

console.log(max + "\n" + idx);