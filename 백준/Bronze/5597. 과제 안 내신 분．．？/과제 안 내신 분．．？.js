let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");;

// 5597: 과제 안 내신 분...?
let mySet = new Set();

// 과제를 제출한 학생들 
for (let i = 0; i < 28; i++) 
  mySet.add(Number(input[i]));

// 출석 번호 확인
for (let i = 1; i <= 30; i++) {
  if (!mySet.has(i)) 
    console.log(i);
}