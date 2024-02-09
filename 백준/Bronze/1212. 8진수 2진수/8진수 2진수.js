let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let answer = '';

answer = input[0] === '0' ? '0' : parseInt(input[0], 8).toString(2);

for (let i = 1; i < input.length; i++) {
  const binary = parseInt(input[i], 8).toString(2).padStart(3, '0');
  answer += binary;
}

console.log(answer);