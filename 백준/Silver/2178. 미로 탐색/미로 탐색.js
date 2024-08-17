let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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

// 2178: 미로 탐색 
let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].split("").map(Number));
}

let visited = [];
for (let i = 0; i < n; i++) {
  visited.push(new Array(m).fill(-1));
}

// 방향 설정하기: 북, 동, 남, 서
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

let queue = new Queue();
queue.enqueue([0, 0]);
visited[0][0] = 1; // 거리값 갱신 

// 큐가 빌 때까지 반복
while (queue.getLength() > 0) {
  let[x, y] = queue.dequeue(); // 큐에서 하나의 원소를 뽑아 출력하기
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= graph.length
        || ny < 0 || ny >= graph[0].length) continue;
    if (visited[nx][ny] === -1 && graph[nx][ny] === 1) {
      queue.enqueue([nx, ny]);
      visited[nx][ny] = visited[x][y] + 1;
    }
  }
}

console.log(visited[n - 1][m - 1]);