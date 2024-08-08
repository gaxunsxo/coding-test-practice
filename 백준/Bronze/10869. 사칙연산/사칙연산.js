let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split(" ");
// 백준: '/dev/stdin'으로 바꿔서 제출

let a = Number(input[0]);
let b = Number(input[1]);

let answer = '';

answer = (a + b) + '\n' + (a - b) + '\n' + (a * b) + '\n' + parseInt(a / b) + '\n' + a % b;

console.log(answer);