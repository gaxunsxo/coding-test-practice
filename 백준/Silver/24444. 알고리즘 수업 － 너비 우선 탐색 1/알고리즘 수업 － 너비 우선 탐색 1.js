let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

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
 getLength() { // 전체 요소의 개수 
   return this.tailIndex- this.headIndex;
 }
}

// BFS 메서드 정의
function bfs(graph, start, visited) {
  queue = new Queue();
  queue.enqueue(start);
  // 현재 노드를 방문 처리
  visited[start] = true;
  
  // 큐가 빌 때까지 반복
  while (queue.getLength() != 0) {
    // 큐에서 하나의 원소를 뽑아 출력하기
    v = queue.dequeue();
    //console.log(v);
    visitedOrder[v] = order++;
    
    // 아직 방문하지 않은 인접한 원소들을 큐에 삽입
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
}

// 24444: 알고리즘 수업 - 너비 우선 탐색 1
let [n, m, r] = input[0].split(" ").map(Number);
let graph = Array.from({ length: n + 1 }, () => []); // 정점 수에 맞게 초기화
for (let i = 0; i < m; i++) {
  let [u, v] = input[i + 1].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

// 인접 리스트 오름차순 정렬
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = Array(n + 1).fill(false);
let visitedOrder = Array(n + 1).fill(0);
let order = 1; // 방문 순서를 기록하기 위함
 
bfs(graph, r, visited);

// 결과 출력 
for (let i = 1; i <= n; i++) {
  if (visitedOrder[i] === 0) console.log(0);
  else console.log(visitedOrder[i]);
}