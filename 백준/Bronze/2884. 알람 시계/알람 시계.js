let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(' ');

let [H, M] = input.map(Number);

M -= 45;

if (M < 0) {
  H -= 1;
  M += 60;
  if (H < 0) {
    H = 23;
  }
}

console.log(H, M);