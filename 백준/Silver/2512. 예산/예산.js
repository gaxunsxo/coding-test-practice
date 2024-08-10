let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]); // n: 지방의 수
let arr = input[1].split(" ").map(Number); // 각 지방의 요청 예산
let m = Number(input[2]); // m: 총 예산
arr.sort((a, b) => a - b);

let left = 1;
let right = arr[n - 1];

// 이분 탐색으로 예산 상한액 계산 
while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let sum = 0; // 상한액에 따른 총 예산 

  // 각 지방의 예산과 상한액 비교 
  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(arr[i], mid);
  }

  if (sum > m) right = mid - 1;
  else left = mid + 1;
}

console.log(left - 1);