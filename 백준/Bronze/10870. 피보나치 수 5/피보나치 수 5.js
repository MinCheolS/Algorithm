let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = +input
let a = 0
let b = 1
let answer = a + b 

for (let i = 2; i < n; i++) {
  a = b
  b = answer
  answer = a + b
}

console.log(n === 0 ? 0 : n === 1 ? 1 : answer)
