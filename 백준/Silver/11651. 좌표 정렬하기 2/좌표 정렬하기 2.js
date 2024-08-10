let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");;

let n = Number(input[0]);
let points = [];

for (let i = 0; i < n; i++) {
  points.push(input[i + 1].split(" ").map(Number));
}

points.sort(function(a, b) {
  if (a[1] == b[1]) {
    return a[0] - b[0]; // x좌표가 작은 게 앞으로 감
  }
  return a[1] - b[1]; // y좌표가 작은 게 앞으로 감 
});

for (let i = 0; i < n; i++) {
  console.log(points[i][0] + " " + points[i][1]);
}