let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const N = +input
let answer = 1

for (let i = 1; i <= N; i++) {
  answer *= i
}

console.log(answer)

