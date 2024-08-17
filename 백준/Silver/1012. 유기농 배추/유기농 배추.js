let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 1012: 유기농 배추
let t = Number(input[0]); // t: 테스트 케이스의 수
let idx = 1;
// 방향 설정하기: 북, 동, 남, 서
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

for (let i = 0; i < t; i++) {
  let [m, n, k] = input[idx].split(" ").map(Number); // m: 밭의 가로 길이, n: 밭의 세로 길이, k: 배추가 심어진 위치의 개수
  idx++;

  let map = []; // 2D 배열 초기화
  for (let v = 0; v < n; v++) { // n으로 초기화해야 함 (세로)
    map.push(new Array(m).fill(0)); // m으로 초기화
  }

  for (let j = 0; j < k; j++) {
    let [x, y] = input[idx].split(" ").map(Number);
    map[y][x] = 1; // 대괄호를 사용하여 올바르게 접근
    idx++;
  }

  let visited = []; // N x M 크기의 맵에서 각 위치에 대한 방문 여부
  for (let i = 0; i < n; i++) {
    visited.push(new Array(m).fill(false));
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

// 각 경우에 필요한 최소 지렁이의 수 구하기
function dfs(x, y, map, visited) {
  visited[x][y] = true; 
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= map.length ||
       ny < 0 || ny >= map[0].length) continue;
    if (!visited[nx][ny] && map[nx][ny] === 1) 
      dfs(nx, ny, map, visited);
  }
}