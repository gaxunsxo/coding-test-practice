let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");;

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

for (let i = 0; i < n; i++) {
  let idx = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[idx] > arr[j]) {
      idx = j;
    }
  }
  [arr[i], arr[idx]] = [arr[idx], arr[i]];
}

console.log(arr.join("\n"));