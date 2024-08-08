let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let answer = (a + b) % c + '\n' + ((a % c) + (b % c)) % c + '\n' + (a * b) % c + '\n' + ((a % c) * (b % c)) % c;

console.log(answer);