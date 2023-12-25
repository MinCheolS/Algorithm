let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0].split(' ')[0]
const X = +input[0].split(' ')[1]
const numList = input[1].split(' ')
let answer = ''

for (let i = 0; i < N; i++) {
  if (+numList[i] < X) {
    answer += +numList[i] + ' '
  }
}

console.log(answer)