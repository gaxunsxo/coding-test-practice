let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 2751: 수 정렬하기 2
let n = Number(input[0]);
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(Number(input[i + 1]));
}
arr.sort(function (a, b) {
  return a - b;
});

console.log(arr.join("\n"));