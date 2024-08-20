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
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 7569번: 3차원 토마토
let [m, n, h] = input[0].split(" ").map(Number);
// m: 가로 길이, n: 세로 길이, h: 상자의 수 
let map = [];
let index = 1; // input 배열의 인덱스 시작

for (let i = 0; i < h; i++) {
  map.push([]); // 새로운 층 추가
  for (let j = 0; j < n; j++) {
    // 각 행을 추가
    map[i].push(input[index].split(" ").map(Number));
    index++; // 다음 행으로 이동
  }
}

// 이동 방향: 상, 하, 좌, 우, 앞, 뒤
let directions = [
  [-1, 0, 0], // 상
  [1, 0, 0],  // 하
  [0, -1, 0], // 좌
  [0, 1, 0],  // 우
  [0, 0, -1], // 앞
  [0, 0, 1] // 뒤
];

let q = new Queue(); // bfs를 위한 큐

// 초기 익은 토마토를 큐에 추가 
for (let k = 0; k < h; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[k][i][j] === 1) { 
        // 익은 토마토의 위치를 큐에 넣음 
        q.enqueue([k, i, j]);
      }
    }
  }
}

// 초기 상자 확인
if (q.getLength() === n * m * h) {
  console.log(0);
  process.exit();
} else if (q.getLength() === 0) {
  console.log(-1);
  process.exit();
}

// bfs: 토마토 익는 최소 일수 구하기
function bfs() {
  let days = 0; // 일수 카운트 
  
  while (q.getLength() > 0) {
    let size = q.getLength(); 

    for (let i = 0; i < size; i++) {
      let [z, y, x] = q.dequeue(); // 현재 토마토 위치를 꺼냄

      for (let [dz, dy, dx] of directions) {
        let nz = z + dz;
        let ny = y + dy;
        let nx = x + dx;

        // 범위 확인
        if (nz < 0 || nz >= h || 
            ny < 0 || ny >= n || 
            nx < 0 || nx >= m) continue;
        if (map[nz][ny][nx] === 0) {
          map[nz][ny][nx] = 1;
          q.enqueue([nz, ny, nx]);
        }
      }
    }
    days++; // 레벨이 끝나면 일수 증가
  }
  return days;
}

let result = bfs() - 1;

for (let k = 0; k < h; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[k][i][j] === 0) result = -1;
    }
  }
}

console.log(result);