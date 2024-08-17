let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 24479번: 알고리즘 수업 - 깊이 우선 탐색 1
let [n, m, r] = input[0].split(" ").map(Number); // n: 정점의 수, m: 간선의 수, 시작 정점: r
let graph = Array.from({ length: n + 1 }, () => []); // 정점 수에 맞게 초기화

for (let i = 1; i <= m; i++) {
  let [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u); // 무향 그래프이므로 양쪽 모두 추가
}

// 각 인접 리스트를 오름차순으로 정렬
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = Array(n + 1).fill(false); // 방문 여부
let visitOrder = Array(n + 1).fill(0); // 방문 순서 기록을 위한 배열
let order = 1; // 방문 순서를 기록하기 위한 변수

function dfs(graph, v) {
  visited[v] = true;
  visitOrder[v] = order++; // 현재 정점을 방문 순서에 기록

  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i);
    }
  }
}

dfs(graph, r);

// 결과 출력
for (let i = 1; i <= n; i++) {
  if (visitOrder[i] === 0) { // 방문하지 않은 경우
    console.log(0);
  } else {
    console.log(visitOrder[i]);
  }
}