let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0]
const V = +input[2]
const num = input[1].split(' ')
let answer = 0

for (let i = 0; i < N; i++) {
  if (+num[i] === V) {
    answer++
  }
}

console.log(answer)