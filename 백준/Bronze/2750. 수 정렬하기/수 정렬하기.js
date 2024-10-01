let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 2750. 수 정렬하기
let n = Number(input[0]);
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(Number(input[i + 1]));
}

// 버블 정렬
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[j] > arr[j + 1]) {
      // 오름차순 정렬
      let tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
    }
  }
}

console.log(arr.join('\n'));