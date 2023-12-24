let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let answer = ''

for (let i = 1; i <= +input[0]; i++) {
  answer += ' '.repeat(+input[0] - i)
  answer += '*'.repeat(i) + '\n'
}

console.log(answer)
