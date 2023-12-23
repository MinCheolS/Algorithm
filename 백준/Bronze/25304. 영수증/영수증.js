let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const totalPay = +input[0]
const type = +input[1]
let answer = 0

for (let i = 2; i < 2 + type; i++) {
  const a = +input[i].split(' ')[0]
  const b = +input[i].split(' ')[1]

  answer += a * b
}

console.log(answer === totalPay ? 'Yes' : 'No')


