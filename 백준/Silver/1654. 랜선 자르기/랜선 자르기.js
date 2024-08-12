let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 1654: 랜선 자르기

// k: 이미 가지고 있는 랜선의 개수, n: 필요한 랜선의 개수
let [k, n] = input[0].split(" ").map(Number);
// arr: 이미 가지고 있는 랜선의 각 길이
let arr = [];
for (let i = 0; i < k; i++) {
  arr.push(Number(input[i+1]));
}
arr.sort((a, b) => a - b);

// 가지고 있는 랜선을 모두 n개의 같은 길이의 랜선으로 만듦
// n개를 만들 수 있는 랜선의 최대 길이 구하기 
let start = 1; 
let end = arr[k - 1]; // output <= 현 랜선의 최대 길이

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let count = 0;
  for (let i = 0; i < k; i++) {
    count += parseInt(arr[i] / mid);
  }

  if (count >= n) start = mid + 1;
  else end = mid - 1;
}

console.log(end);