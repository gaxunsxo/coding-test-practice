let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString();

let y = Number(input);

console.log(y - 543);