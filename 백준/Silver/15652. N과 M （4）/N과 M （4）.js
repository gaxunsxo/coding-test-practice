let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 15652번. N과 M(4)
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

let results = [];
let selected = [];

// 중복 가능, 고른 수열은 오름차순, 조합 문제
function dfs(start, depth) {
  if (depth == m) {
    results.push([...selected]);
    return;
  }

  for (let i = start; i <= n; i++) {
    selected.push(i);
    dfs(i, depth + 1); // 현재 숫자 i를 start로 넘김
    selected.pop();
  }
}

dfs(1, 0);

console.log(results.map((selected) => selected.join(" ")).join("\n"));