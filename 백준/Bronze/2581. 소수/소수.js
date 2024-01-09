let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const M = +input[0]
const N = +input[1]
let answer = []

for (let i = M; i <= N; i++) {
  isPrime(i)
}

function isPrime(num) {
  if (num === 1) return
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return
  }
  answer.push(num)
}

console.log(answer.length === 0 ? -1 : answer.reduce((acc, cur) => acc + cur) + '\n' + Math.min(...answer))
