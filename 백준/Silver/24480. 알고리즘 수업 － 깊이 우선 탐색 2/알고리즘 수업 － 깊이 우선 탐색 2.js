let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 24480번: 알고리즘 수업 - 깊이 우선 탐색
let [n, m, r] = input[0].split(" ").map(Number); // 정점의 수 n, 간선의 수 m, 시작 정점 r
let graph = Array.from( { length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  let [u, v] = input[i + 1].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}
// 인접 리스트 내림차순 정렬
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => b - a);
}

// 각 정점의 방문 여부 기록 
let visited = Array(n + 1).fill(false);

// 정점 방문 순서 시록
let visitedOrder = Array(n + 1).fill(0);
let order = 1; // 방문 순서 카운터

function dfs(i) {
  visited[i] = true;
  visitedOrder[i] = order++;

  for (let a of graph[i]) { // a: 정점 i의 인접 정점 집합 
    if (!visited[a]) dfs(a);
  }
}

dfs(r); // 시작 정점 r부터 순회

for (let i = 1; i < visitedOrder.length; i++)
  console.log(visitedOrder[i]);