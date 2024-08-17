let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 2667번: 단지번호붙이기 
let n = Number(input[0]);
let map = [];
for (let i = 0; i < n; i++) {
  map.push(input[i + 1].split("").map(Number)); 
}

// 방향 설정하기: 북, 동, 남, 서
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

let visited = []; // n x n 맵에서의 각 위치의 방문 여부 
for (let i = 0; i < n; i++) {
  visited.push(new Array(n).fill(false));
}
let count = 0; // 현재 단지에 있는 집의 수 
let village = 0;

function dfs(x, y) {
  visited[x][y] = true; // (x, y) 방문 처
  count++;
  for (let i = 0; i < 4; i++) {
    // 인접한 노드(4가지 방향) 확인
    let nx = x + dx[i];
    let ny = y + dy[i];
    // 범위(n, n)를 벗어나는 좌표라면 무시 
    if (nx < 0 || nx >= n || 
       ny < 0 || ny >= n) continue;
    if (!visited[nx][ny] && map[nx][ny] === 1) 
      dfs(nx, ny);
  }
}

let houses = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j] && map[i][j] === 1) {
      // 새로운 단지(연결 요소)가 있다면 
      count = 0; // 해당 단지에 있는 집의 수 초기화 
      dfs(i, j); // 해당 단지를 방문
      village++; // 전체 단지의 수 증가
      houses.push(count);
    }
  }
}

console.log(village);
houses.sort((a, b) => a - b); // 방문한 단지의 수 오름차순 정렬
console.log(houses.join("\n"));