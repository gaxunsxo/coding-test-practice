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

// 1697번: 숨바꼭질
let [n, k] = input[0].split(" ").map(Number); // n: 수빈이가 있는 위치, k: 동생이 있는 위치

let visited = Array(100001).fill(false); // 범위를 0~100000으로 설정
let time = 0;

function bfs (i) {
  let q = new Queue();
  q.enqueue(i); // 현재 수빈이의 위치를 큐에 추가 
  visited[i] = true;
  
  while (q.getLength() != 0) {
    let size = q.getLength(); // 현재 레벨의 노드 수

    for (let j = 0; j < size; j++) {
      let x = q.dequeue();

      // 동생의 위치에 도달했을 경우
      if (x === k) {
        console.log(time);
        return; // bfs 종료
      }

      // 이동 방향 설정: x-1, x+1, x*2
      let nextPositions = [x-1, x+1, x*2];
      for (let nx of nextPositions) {
        if (nx < 0 || nx > 100000) continue; // 경계 확인
        if (!visited[nx]) {
          q.enqueue(nx);
          visited[nx] = true; // 방문 처리
        }
      }
    }
    time++; // 레벨이 끝날 때마다 시간 증가
  }
}

bfs(n);