let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]); // 정수의 개수 
let arr = input[1].split(" ").map(Number);
let v = Number(input[2]); // 찾으려는 정수

let count = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] == v)
    count++;
}

console.log(count);