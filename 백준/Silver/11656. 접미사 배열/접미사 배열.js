let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const length = input.length;
const answer = [];
for (let i = 0; i < length; i++) {
  answer.push(input.join(''));
  input.shift();
}
answer.sort((a, b) => a.localeCompare(b));
console.log(answer.join('\n'));