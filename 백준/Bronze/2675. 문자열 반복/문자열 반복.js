let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = ''

for (let i = 1; i <= input[0]; i++) {
  let repetNum = +input[i].split(' ')[0]
  let arr = input[i].split(' ')[1]
  for (let j = 0; j < arr.length; j++) {
    answer += arr[j].repeat(repetNum)
  }
  answer += '\n'
}

console.log(answer)
