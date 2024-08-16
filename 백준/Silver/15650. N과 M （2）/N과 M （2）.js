let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

// 15650: N과 M (2)
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let visited = new Array(n).fill(false); // 각 원소 인덱스(index)별 방문 여부
let selected = []; // 현재 조합에 포함된 원소(element)의 인덱스

// 1부터 n까지의 자연수 중에서 중복 없이 m개를 고른 수열 
// 고른 수열은 오름차순 
let answer = "";
function dfs(arr, depth, start) {
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

  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue; // 이미 방문한 원소는 무시
    selected.push(i); 
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth + 1, i + 1); // 조합이므로, 다음 원소를 넣어 재귀 호출
    selected.pop();
    visited[i] = false; // 현재 원소 방문 처리 취소 
  }
}
dfs(arr, 0, 0);
console.log(answer);