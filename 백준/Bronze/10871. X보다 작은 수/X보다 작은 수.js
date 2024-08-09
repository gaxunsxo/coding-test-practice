let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, x] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let answer = "";

for (let i = 0; i < n; i++) {
  if (arr[i] < x) 
    answer += arr[i] + " ";
}

console.log(answer);