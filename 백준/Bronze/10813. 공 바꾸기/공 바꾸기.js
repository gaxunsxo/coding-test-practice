let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let tmp = arr[a - 1];
  arr[a - 1] = arr[b - 1];
  arr[b - 1] = tmp;
}

let answer = "";
for (let i = 0; i < n; i++) {
  answer += arr[i] + " ";
}
console.log(answer);