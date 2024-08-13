let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 1931: 회의실 배정
let n = Number(input[0]);
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i+1].split(" ").map(Number));
}

// 종료 시간 순으로 정렬 
arr.sort((a, b) => {
  if (a[1] == b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});      

// 사용할 수 있는 최대 회의의 수 구하기 
let count = 0;
let lastEndTime = 0;

for (let i = 0; i < n; i++) {
  if (arr[i][0] >= lastEndTime) {
    // 회의 시작 시간이 마지막 회의 종료 시간과 겹친다면
    count++;
    lastEndTime = arr[i][1]; // 회의 종료 시간 갱신 
  }
}

console.log(count);