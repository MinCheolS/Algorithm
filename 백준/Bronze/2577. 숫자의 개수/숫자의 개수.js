let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const A = +input[0]
const B = +input[1]
const C = +input[2]
let multiply = (A * B * C).toString()

for (let i = 0; i <= 9; i++) {
  let count = 0

  for (let j = 0; j < multiply.length; j++) {
    if (Number(multiply[j]) === i) count++
  }
  console.log(count)
}
