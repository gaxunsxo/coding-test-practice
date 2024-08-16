let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 15652: N과 M (4)
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
let selected = []; // 현재 조합에 포함된 원소(element)의 인덱스

/**
 * 1. 1부터 N까지 자연수 중, M개를 고른 수열
 * 2. 같은 수를 여러 번 골라도 됨
 * 3. 고른 수열은 비내림차순이어야 함 = 오름차순 
 */
let answer = "";
function dfs(depth, start) {
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
    // start: 다음 호출 시 자신 중복 선택 가능
    selected.push(i); 
    dfs(depth + 1, i); // 같은 원소를 다시 사용할 수 있으므로 'i'를 그대로 전달
    selected.pop();
  }
}
dfs(0, 0);
console.log(answer);