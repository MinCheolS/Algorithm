let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
input.shift();
const answer = [];
for (i of input) {
  while (answer.length > 0 && answer[answer.length - 1] <= i) answer.pop();
  answer.push(i);
}
console.log(answer.length);