let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 13305번: 주유소 
// n: 도시의 개수
let n = Number(input[0]); 
// len: 인접한 두 도시를 연결하는 도로의 길이
let len = input[1].split(" ").map(BigInt);
// fuels: 주유소의 리터당 가격 
let fuels = input[2].split(" ").map(BigInt);

// 최소 비용 계산
let totalCost = 0n;
let minPrice = fuels[0]; // 첫 번째 도시의 주유소 가격으로 초기화

for (let i = 0; i < n - 1; i++) {
  // 현재 도시의 주유소 가격이 더 저렴하다면 갱신
  if (fuels[i] < minPrice) {
    minPrice = fuels[i];
  }
  // 현재 도로의 길이에 최소 가격을 곱해 비용 추가
  totalCost += minPrice * len[i];
}

console.log(String(totalCost));