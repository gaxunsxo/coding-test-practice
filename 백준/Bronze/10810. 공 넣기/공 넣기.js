let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");;

// n: 총 바구니 수, m: 공을 넣을 횟수
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(0);
}

for (let x = 0; x < m; x++) {
  let [i, j, k] = input[x + 1].split(" ").map(Number);
  
  // i번 바구니부터 j번 바구니까지에 k번 번호가 적힌 공을 넣음
  for (let l = i-1; l < j; l++) {
    arr[l] = k;
  }
}

let answer = "";
for (let i = 0; i < n; i++) {
  if (arr[i] == 0) {
    answer += "0 ";
  } else 
    answer += arr[i] + " ";
}

console.log(answer);