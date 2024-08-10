let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let height = input[1].split(" ").map(Number);
height.sort((a, b) => a - b);

let start = 0;
let end = height[n - 1];

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (height[i] > mid) 
      sum += height[i] - mid;
  }
  if (sum < m) end = mid - 1;
  else start = mid + 1;
}

console.log(end);