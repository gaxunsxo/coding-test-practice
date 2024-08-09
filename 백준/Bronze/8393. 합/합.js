let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let n = Number(input);
let sum = 0;

while (n >= 1) {
  sum += n;
  n--;
}

console.log(sum);