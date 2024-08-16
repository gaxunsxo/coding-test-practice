let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 15650: N과 M (2)
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
let selected = []; // 현재 조합에 포함된 원소(element)의 인덱스

// 1부터 n까지의 자연수 중에 m개(중복 가능)를 고른 수열 
// 고른 수열은 사전 순으로 출력 
let answer = "";
function dfs(arr, depth) {
  if (depth == m) {
    // 고른 수열을 모두 출력하기 
    let result = []; // 조합(combination) 결과 저장 테이블
    for (let i of selected) 
      result.push(arr[i]);
    for (let x of result) 
      answer += x + " "; // 계산된 조합을 실질적으로 처리하는 부분
    answer += "\n"
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    selected.push(i); 
    dfs(arr, depth + 1, i + 1); // 조합이므로, 다음 원소를 넣어 재귀 호출
    selected.pop();
  }
}
dfs(arr, 0);
console.log(answer);