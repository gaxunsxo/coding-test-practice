let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 21921번: 블로그
// X일 동안 가장 많이 들어온 방문자 수와 그 기간을 찾는 문제
let [N, X] = input[0].split(" ").map(Number); // 지난 일수 N, X
let arr = input[1].split(" ").map(Number); // N일차까지의 방문자 수

// N: 데이터의 개수, X: 찾고자 하는 부분 집합
let cnt = 0;
let intervalSum = 0;
let start = 0;
let end = 0;
let max = 0;

// start를 차례대로 증가시키며 반복
while (start < N) {
  // end를 가능한 만큼 이동시키기: 기간이 X일 동안
  while (end < N && end - start < X) {
    intervalSum += arr[end];
    end++;
  }
  
  if (end - start === X) {
    if (intervalSum > max) {
      max = intervalSum;
      cnt = 1; // 새로운 최대값이 발견되면 카운트를 1로 초기화
    } else if (intervalSum === max) {
      cnt++; // 최대값과 같으면 카운트를 증가
    }
  }
  intervalSum -= arr[start];
  start++;
}
// 출력: X일 동안 가장 많이 들어온 방문자 수 -> 0이면 SAD출력
// 출력: 기간이 몇 개 있는지 출력
if (cnt != 0 && max != 0) {
  console.log(max);
  console.log(cnt);
} else {
  console.log("SAD");
}