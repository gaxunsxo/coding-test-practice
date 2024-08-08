let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = input[1];

let answer = a * Number(b[2]) + '\n' + a * Number(b[1]) + '\n' + a * Number(b[0]) + '\n' + a * Number(b);

console.log(answer);