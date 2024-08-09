let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let n = Number(input);
let answer = "";

for (let i = 0; i < n / 4; i++) {
  answer += "long ";
}
console.log(answer + "int");