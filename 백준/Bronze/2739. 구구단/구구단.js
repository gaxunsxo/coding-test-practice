let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let a = Number(input);

for (let i = 1; i <= 9; i++) {
  console.log(a, "*", i, "=", a * i);
}