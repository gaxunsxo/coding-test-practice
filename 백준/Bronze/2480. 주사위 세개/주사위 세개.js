let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let [a, b, c] = input.map(Number);

// 1. 같은 눈이 3개가 나오는 경우
if (a == b && b == c) {
  console.log(10000 + a * 1000);
}
  
// 3. 모두 다른 눈이 나오는 경우 
else if (a != b && b != c && c != a) {
  console.log(Math.max(a, b, c) * 100);
}

// 2. 같은 눈이 2개만 나오는 경우
else {
  if (a == b) {
    console.log(1000 + a * 100);
  } else if (b == c) {
    console.log(1000 + b * 100);
  } else if (c == a) {
    console.log(1000 + c * 100);
  }
}