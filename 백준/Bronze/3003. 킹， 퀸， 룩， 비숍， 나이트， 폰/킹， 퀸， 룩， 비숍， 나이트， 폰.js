let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const standard = [1, 1, 2, 2, 2, 8]
const arr = input.split(' ')
let answer = ''

for (let i = 0; i < arr.length; i++) {
  answer += standard[i] - arr[i] + ' '
}

console.log(answer)
