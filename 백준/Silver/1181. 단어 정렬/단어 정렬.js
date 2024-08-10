let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");;

let n = Number(input[0]);
let wordsSet = new Set();

for (let i = 0; i < n; i++) {
  // 중복 제거 
  wordsSet.add(input[i+1].trim());
}

let words = Array.from(wordsSet); // Set을 배열로 변환

words.sort(function(a, b) {
  if (a.length == b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
})

console.log(words.join("\n"));