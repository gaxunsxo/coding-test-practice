let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 18870: 좌표 압축
let n = Number(input[0]);
let origin = input[1].split(" ").map(Number);

// 중복 제거 및 정렬
let sortedUnique = Array.from(new Set(origin)).sort((a, b) => a - b);

// 각 값의 압축된 인덱스를 찾기 위한 맵 생성
let indexMap = new Map();
for (let i = 0; i < sortedUnique.length; i++) {
    indexMap.set(sortedUnique[i], i);
}

// 원래 순서대로 압축된 값을 구하기
let answer = origin.map(value => indexMap.get(value)).join(" ");

console.log(answer);