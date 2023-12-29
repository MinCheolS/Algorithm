let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = +input[0]
const arr = [...input[1].split(' ').map((n) => +n)]
const max = Math.max(...arr)
let answer = 0

for (let i = 0; i < num; i++) {
  answer += arr[i] / max * 100
}

console.log(answer / num)
