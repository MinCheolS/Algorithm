let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCount = +input[0]

for (let i = 1; i <= testCount; i++) {
  const A = +input[i].split(' ')[0]
  const B = +input[i].split(' ')[1]

  console.log(A + B)
}
