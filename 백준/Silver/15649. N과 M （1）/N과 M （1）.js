let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

// 15649: N과 M(1)
let [n, m] = input.split(" ").map(Number);

// 1부터 n까지의 자연수 중에서 중복 없이 m개를 고른 수열 
// 수열은 사전 순으로 증가하는 순서로 출력 
let numbers = [];

function select(n) {
  for (let a of numbers) {
    // 현재까지 고른 모든 수
    if (a == n) return false; // 중복된다면 고를 수 없음 
  }
  return true;
}

let answers = [];
function dfs(depth) {
  if (depth == m) { // m개의 수열을 만들 수 있다면 
    answers.push([...numbers]); // 현재 수열을 복사하여 저장 
    return;
  }
  
  for (let i = 1; i <= n; i++) {
    if (!select(i)) continue; // 현재 수를 고를 수 없다면 무시
    numbers.push(i); // 현재 수열에 수를 넣기
    dfs(depth + 1); // 재귀 함수 호출
    numbers.pop(); // 현재 수열에서 수를 제거하기 
  }
}
dfs(0);
console.log(answers.map(arr => arr.join(" ")).join("\n"));