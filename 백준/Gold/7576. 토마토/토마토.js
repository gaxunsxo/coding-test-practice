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

// 7576번: 토마토
let [m, n] = input[0].split(" ").map(Number);
let map = [];
for (let i = 0; i < n; i++) {
  map.push(input[i + 1].split(" ").map(Number));
}

// 이동 방향 설정: 위, 아래, 왼, 오
let directions = [
  [-1, 0], // 위
  [1, 0],  // 아래
  [0, -1], // 왼쪽
  [0, 1]   // 오른쪽
];
let q = new Queue(); // bfs를 위한 큐

// 초기 익은 토마토를 큐에 추가 
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1) { 
      // 익은 토마토의 위치를 큐에 넣음 
      q.enqueue([i, j]);
    }
  }
}

// 초기 상자 확인
if (q.getLength() === n * m) {
  console.log(0);
  process.exit();
} else if (q.getLength() === 0) {
  console.log(-1);
  process.exit();
}

// bfs: 토마토기 익는 최소 일수 구하기
function bfs() {
  let days = 0; // 일수 카운트 
  
  while (q.getLength() > 0) {
    let size = q.getLength(); 

    for (let i = 0; i < size; i++) {
      let [x, y] = q.dequeue(); // 현재 토마토 위치를 꺼냄

      for (let [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;

        // 범위 확인
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (map[nx][ny] === 0) {
          map[nx][ny] = 1;
          q.enqueue([nx, ny]);
        }
      }
    }
    days++; // 레벨이 끝나면 일수 증가
  }
  return days;
}

let result = bfs() - 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) result = -1;
  }
}

console.log(result);