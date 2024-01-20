let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const num = +input
let answer = ''

for (let i = num; i > 0; i--) {
  answer += i + '\n'
}

console.log(answer)