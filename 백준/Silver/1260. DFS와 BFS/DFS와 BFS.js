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

// 1260: DFS와 BFS
let [n, m, v] = input[0].split(" ").map(Number); // n: 정점의 수, m: 간선의 수, v: 시작 정점
let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  let [u, v] = input[i].split(" ").map(Number); // 인덱스 수정
  graph[u].push(v);
  graph[v].push(u);
}
// 인접 리스트 오름차순 정렬
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = Array(n + 1).fill(false);
let answer_dfs = "";

function dfs(i) {
  visited[i] = true;
  answer_dfs += i + " ";

  for (let a of graph[i]) {
    if (!visited[a]) 
      dfs(a);
  }
}
// dfs 실행
dfs(v);

visited = Array(n + 1).fill(false); // 초기화
let answer_bfs = "";

function bfs(i) {
  let q = new Queue();
  q.enqueue(i); // 큐에 시작 정점 i 추가
  visited[i] = true;
  answer_bfs += i + " ";

  while (q.getLength() != 0) {
    let u = q.dequeue(); // 큐의 맨 앞 요소 삭제
    
    for (let v of graph[u]) { // 정점 u의 인접 정점 집합
      if (!visited[v]) {
        visited[v] = true; // 정점 v 방문 처리
        q.enqueue(v); // 큐에 정점 v 추가
        answer_bfs += v + " ";
      }
    }
  }
}

// bfs 실행
bfs(v);

console.log(answer_dfs + "\n" + answer_bfs);