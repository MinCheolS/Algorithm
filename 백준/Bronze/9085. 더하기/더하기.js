let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');    
const answer = [];
for (let i = 2; i < input.length; i += 2) {
  let sum = input[i].split(' ').reduce((acc, cur) => +acc + +cur);
  answer.push(sum);
}
console.log(answer.join('\n'));