let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const answer = input.reduce((acc, cur) => acc + cur * cur, 0) % 10;
console.log(answer);