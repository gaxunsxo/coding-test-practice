let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let m = Number(input[2]);

// 상근이가 가진 숫자 카드 (중복 O)
let arr = input[1].split(" ").map(Number);
let query = input[3].split(" ").map(Number);

// 정수 배열 오름차순 정렬
arr.sort((a, b) => a - b);

// 배열에서 특정 값의 개수 구하기
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, target) {
  return upperBound(arr, target, 0, arr.length) - lowerBound(arr, target, 0, arr.length);
}

let answer = "";
for (let i = 0; i < m; i++) {
  answer += countByRange(arr, query[i], query[i]) + " ";
}
console.log(answer); 