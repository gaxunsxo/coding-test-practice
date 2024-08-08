let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [hour, minute] = input[0].split(' ').map(Number);;
let time = Number(input[1]);

minute += time; 
hour += parseInt(minute / 60);
minute = minute % 60;

if (hour >= 24) {
  hour = hour % 24;
}

console.log(hour, minute);