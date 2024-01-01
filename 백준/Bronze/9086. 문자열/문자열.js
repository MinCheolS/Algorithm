let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = ''

for (let i = 1; i <= +input[0]; i++) {
  if (input[i].length === 1) answer = input[i].repeat(2)
  else answer = input[i][0] + input[i][input[i].length - 1]
  console.log(answer)
}
