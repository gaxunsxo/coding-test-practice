let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 15651번. N과 M(3)
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

let selected = [];
let results = [];

// 1부터 N까지 자연수 중에서 M개를 고른 수열 (중복 가능)
function dfs(start, depth) {
  if (depth == m) {
    results.push([...selected]);
    return;
  }

  for (let i = 1; i <= n; i++) {
    selected.push(i);
    dfs(start + 1, depth + 1);
    selected.pop();
  }
}

dfs(1, 0);
console.log(results.map((selected) => selected.join(" ")).join("\n"));