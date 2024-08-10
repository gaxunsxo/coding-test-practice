let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");;

// n: 단위 화폐의 수, k: 가치의 합
let [n, k] = input[0].split(" ").map(Number);
let coins = [];

for (let i = 1; i <= n; i++) {
  coins.push(Number(input[i]));
}

coins.sort((a, b) => b - a);
let answer = 0;

for (let i = 0; i < n; i++) {
  if (coins[i] <= k) {
    // answer += parseInt(k / coins[i]);
    answer += Math.floor(k / coins[i]);
    k %= coins[i];
  } 
}

console.log(answer);