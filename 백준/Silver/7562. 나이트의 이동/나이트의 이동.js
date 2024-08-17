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

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 7562: 나이트의 이동
let t = Number(input[0]); // t: 테스트 케이스 수
let idx = 1;

let dx = [1, 2, 2, 1, -1, -2, -2, -1];
let dy = [2, 1, -1, -2, -2, -1, 1, 2];

for (let i = 0; i < t; i++) {
  let l = Number(input[idx++]); // l: 체스판의 한 변의 길이
  let curr = input[idx++].split(" ").map(Number); // 현재 나이트가 있는 칸
  let move = input[idx++].split(" ").map(Number); // 나이트가 이동하려는 칸 

  let visited = []; // 방문 처리 배열
  for (let j = 0; j < l; j++) {
    visited.push(new Array(l).fill(-1));
  }

  bfs(l, curr, move, visited);
}

// bfs 수행: 나이트가 최소 몇 번만에 이동할 수 있는지 출력
function bfs(l, curr, move, visited) {
  let q = new Queue();
  q.enqueue(curr); // 현재 나이트의 위치를 큐에 추가
  visited[curr[0]][curr[1]] = 0;

  while (q.getLength() > 0) {
    let [x, y] = q.dequeue();
    // 목표 위치에 도달했을 경우
    if (x === move[0] && y === move[1]) {
      console.log(visited[x][y]); // 이동 횟수 출력
      break;
    }

    for (let j = 0; j < 8; j++) {
      let nx = x + dx[j];
      let ny = y + dy[j];
      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
      if (visited[nx][ny] === -1) {
        q.enqueue([nx, ny]);
        visited[nx][ny] = visited[x][y] + 1;
      }
    }
  }
}