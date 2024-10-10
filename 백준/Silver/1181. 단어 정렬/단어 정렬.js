let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 1181: 단어 정렬
let n = Number(input[0]); // N개의 수
let mySet = new Set();
for (let i = 0; i < n; i++) {
  mySet.add(input[i + 1]);
}

// 단어 정렬: 1. 길이가 짧은 것부터, 2. 길이가 같으면 사전 순으로, 3. 중복은 제거
function compare(a, b) {
  if (a.length == b.length) return a.localeCompare(b); // 길이가 같으면 사전 순으로
  return a.length - b.length;
}

let arr = Array.from(mySet); // 집합을 배열로 변환
arr.sort(compare);

// 결과 문자열 합치기
let result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i] + "\n";
}

console.log(result);