let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const num = input[i].trim().split(' ')
  console.log(+num[0] + +num[1])
}
