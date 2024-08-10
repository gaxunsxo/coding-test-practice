let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let groups = input.split("-");
let answer = 0;

// 그룹의 첫 번째 요소는 항상 양수
// ex. -90 + 30 ... 
for (let i = 0; i < groups.length; i++) {
  let curr = groups[i].split("+").map(Number);
  let sum = 0;
  for (let j = 0; j < curr.length; j++) {
    sum += curr[j];
  }
  if (i == 0) answer += sum;
  else answer -= sum;
}

console.log(answer);