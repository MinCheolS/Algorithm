let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = 0;
for (let i = 1; i < input.length; i++) {
  let sum = input[i].split(' ').reduce((acc, cur) => +acc + +cur);
  answer = sum;
  console.log(answer);
}