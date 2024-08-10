let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let m = Number(input[2]);

let arr = input[1].split(" ").map(Number);
let query = input[3].split(" ").map(Number);

// 정수 배열 오름차순 정렬
arr.sort((a, b) => a - b);

// 정수 배열에서 특정 원소의 존재 여부 구하기 
function binarySearch(arr, start, end, target) {
  if (start > end) return false;
  
  let mid =  parseInt((start + end) / 2);
  if (arr[mid] === target) return true;
  if (arr[mid] > target) return binarySearch(arr, start, mid - 1, target);
  else return binarySearch(arr, mid + 1, end, target);
}

let answer = "";
for (let i = 0; i < m; i++) {
  if (binarySearch(arr, 0, n-1, query[i])) 
    answer += "1 ";
  else 
    answer += "0 "
}

console.log(answer);