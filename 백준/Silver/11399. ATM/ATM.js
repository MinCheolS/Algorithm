let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const arr = input[1].split(' ')
let result = 0
let answer = 0
arr.sort((a, b) => a - b)
for (let i = 0; i < arr.length; i++) {
  let num = 0
  answer += +arr[i] + num
  result += answer
  num = answer
}
console.log(result)