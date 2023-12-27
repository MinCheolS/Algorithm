let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = new Array(30).fill(1)
let answer = ''

for (let i = 0; i < input.length; i++) {
  arr[+input[i] - 1] = arr[+input[i] - 1] - 1
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    answer += i + 1 + '\n'
  }
}

console.log(answer)
