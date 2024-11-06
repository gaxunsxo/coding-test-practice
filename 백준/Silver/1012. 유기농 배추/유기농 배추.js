let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 1012번. 유기농 배추
let t = Number(input[0]); // 테스트 케이스의 수
let idx = 1;

// 이동 방향 정의: 상하좌우
let dx = [0, 0, -1, 1];
let dy = [1, -1, 0, 0];

for (let i = 0; i < t; i++) {
  let [m, n, k] = input[idx].split(" ").map(Number); // 가로 길이, 세로 길이, 배추의 수
  idx++;

  let map = []; // 배추밭
  let visited = []; // 각 위치 방문 여부
  for (let i = 0; i < n; i++) {
    map.push(new Array(m).fill(0));
    visited.push(new Array(m).fill(false));
  }

  // 배추 위치 기록
  for (let i = 0; i < k; i++) {
    let [x, y] = input[idx].split(" ").map(Number);
    map[y][x] = 1;
    idx++;
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && map[i][j] === 1) {
        // 새로운 단지가 있다면
        dfs(i, j, map, visited);
        count++;
      }
    }
  }

  console.log(count);
}

function dfs(x, y, map, visited) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i]; // 세로
    let ny = y + dy[i]; // 가로

    if (nx >= map.length || nx < 0 || ny >= map[0].length || ny < 0) continue;

    if (!visited[nx][ny] && map[nx][ny] === 1) dfs(nx, ny, map, visited);
  }
}
