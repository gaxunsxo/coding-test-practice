let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 2606번: 바이러스 
let num_computer = Number(input[0]); // 컴퓨터의 수
let num_connected = Number(input[1]); // 네트워크 상에서 연결되어 있는 컴퓨터 쌍의 수
let connected = Array.from({ length: num_computer + 1 }, () => []); ; // 네트워크 상에서 연결되어 있는 컴퓨터의 번호 쌍
for (let i = 1; i <= num_connected; i++) {
  let [u, v] = input[i + 1].split(" ").map(Number);
  connected[u].push(v);
  connected[v].push(u);
}

// 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수 구하기 
let visited = Array(num_computer + 1).fill(false);
let count = 0;

function dfs(start) {
  visited[start] = true;
  count++;
  for (let i of connected[start]) {
    if (!visited[i]) dfs(i);
  }
}

dfs(1);
console.log(count - 1);