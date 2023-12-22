let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const number = +input[0]
let answer = 0

for (let i = 1; i <= number; i++) {
  answer += i
}

console.log(answer)
