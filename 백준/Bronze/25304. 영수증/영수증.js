let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let X = Number(input[0]); // 영수증에 적힌 총 금액 X
let N = Number(input[1]); // 총 N개의 상품

for (let i = 0; i < N; i++) {
  let [price, num] = input[i + 2].split(" ").map(Number);
  X -= price * num;
}

if (X == 0)
  console.log("Yes");
else 
  console.log("No");