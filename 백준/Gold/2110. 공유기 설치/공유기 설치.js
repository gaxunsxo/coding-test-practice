let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 2110: 공유기 설치
// n: 집의 개수, c: 공유기의 개수 
let [n, c] = input[0].split(" ").map(Number);

// points: 집의 좌표 
let points = [];
for (let i = 0; i < n; i++) {
  points.push(Number(input[i + 1]));
}
points.sort((a, b) => a - b);

// 가장 인접한 두 공유기 사이의 최대 거리 구하기 
let start = 1; // 최소 거리 
let end = points[n - 1] - points[0]; // 최대 거리 
let answer = 0;

// 이분 탐색 
while (start <= end) {
  let mid = Math.floor((start + end) / 2); // 인접한 두 공유기 사이의 최소 거리 
  let count = 1; // 첫 번째 공유기 설치 
  let lastPosition = points[0]; // 마지막으로 설치한 공유기 위치 

  // 공유기 설치 
  for (let i = 1; i < points.length; i++) {
    // 현재 집과 마지막 공유기 사이의 거리 
    if (points[i] - lastPosition >= mid) {
      count++; // 공유기 설치
      lastPosition = points[i]; // 마지막 설치 위치 업데이트
    }
  }

  if (count >= c) {
    // 설치한 공유기 개수가 c 이상이면
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);