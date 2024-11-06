let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 2667번. 단지번호붙이기
let n = Number(input[0]);
let map = [];
for (let i = 0; i < n; i++) {
  map.push(input[i + 1].split("").map(Number));
}

// 총 단지 수
let totalVillage = 0;

// 각 단지내 집의 수 저장
let village = [];

// 한 단지 내 집의 수
let count = 0;

// 집의 방문 여부 확인
let visited = [];
for (let i = 0; i < n; i++) visited.push(Array(n).fill(false));

// 이동 방향: 상하좌우
let dx = [0, 0, -1, 1];
let dy = [1, -1, 0, 0];

// 지도를 순회하며
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j] && map[i][j] === 1) {
      totalVillage++; // 단지 수 증가
      count = 0; // 단지 내 집의 수 초기화
      dfs(i, j);
    }
  }
}

function dfs(x, y) {
  visited[x][y] = true;
  count++;
  village[totalVillage] = count;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= n || nx < 0 || ny >= n || ny < 0) continue;
    if (!visited[nx][ny] && map[nx][ny]) {
      // count++; // 단지 내 집의 수 증가
      dfs(nx, ny);
    }
  }
}

// 총 단지수
console.log(totalVillage);
// 각 단지 내 집의 수: 오름차순 정렬
village.sort((a, b) => a - b);
console.log(village.join("\n"));
