let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

while (true) {
  let [a, b] = input.shift().split(" ");
  if (a === "0" && b === "0") break;
  else console.log(Number(a) + Number(b));
}