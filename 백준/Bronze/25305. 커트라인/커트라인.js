let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 25305: 커트라인
let [n, k] = input[0].split(" ").map(Number);
let score = input[1].split(" ").map(Number);
score.sort((a, b) => b - a);

console.log(score[k-1]);