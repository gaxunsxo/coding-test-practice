class Queue {
 constructor() {
   this.items = {};
   this.headIndex = 0;
   this.tailIndex = 0;
 }
 enqueue(item) {
   this.items[this.tailIndex] = item;
   this.tailIndex++;
 }
 dequeue() {
   const item = this.items[this.headIndex];
   delete this.items[this.headIndex];
   this.headIndex++;
   return item;
 }
 peek() {
   return this.items[this.headIndex];
 }
 getLength() {
   return this.tailIndex - this.headIndex;
 }
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 24445: 알고리즘 수업 - 너비 우선 탐색 2
let [n, m, r] = input[0].split(" ").map(Number); // 정점의 수(n), 간선의 수(m), 시작 정점(r)
let graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  let [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}
// 인접 리스트 내림차순 정렬
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => b - a);
}

let visited = Array(n + 1).fill(false);
let visitedOrder = Array(n + 1).fill(0);
let order = 1;

function bfs(i) {
  let q = new Queue();
  q.enqueue(i); // 큐에 시작 정점 i 추가
  visited[i] = true; // 시작 정점 i 방문 처리
  
  while (q.getLength() != 0) {
    let u = q.dequeue(); // 큐의 맨 앞 요소 삭제
    visitedOrder[u] = order++;
    
    for (v of graph[u]) { // 정점 u의 인접 정점 집합 
      if (!visited[v]) {
        visited[v] = true; // 정점 v 방문 처리
        q.enqueue(v); // 큐에 정점 v 추가
      }
    }
  }
}

bfs(r);

for (let i = 1; i < visitedOrder.length; i++) 
  console.log(visitedOrder[i]);