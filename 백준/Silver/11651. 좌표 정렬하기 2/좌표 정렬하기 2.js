let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 11651: 좌표 정렬하기 2
let n = Number(input[0]); // N개의 수
let arr = [];
for (let i = 0; i < n; i++) {
  let [x, y] = input[i+1].split(" ").map(Number);
  arr.push([x, y]);
}

// y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬
arr.sort(function(a, b) {
  if (a[1] == b[1])
    return a[0] - b[0]; // y좌표로 정렬
  return a[1] - b[1];
});

let result = "";
for (let i = 0; i < n; i++) {
  result += arr[i][0] + " " + arr[i][1] + "\n";
}

console.log(result);