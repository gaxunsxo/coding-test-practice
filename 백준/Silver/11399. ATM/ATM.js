let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");;

let n = Number(input[0]);

// 각 사람이 돈을 인출하는 데 걸리는 시간 Pi
let arr = input[1].split(" ").map(Number);

// 오름차순 정렬
arr.sort((a, b) => a - b);

let count = 0;
let totalTime = 0;

for (let i = 0; i < n; i++) {
  count += arr[i];
  totalTime += count;
}

console.log(totalTime);