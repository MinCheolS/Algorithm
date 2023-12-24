let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= +input[0]; i++) {
  const A = +input[i].split(' ')[0]
  const B = +input[i].split(' ')[1]

  console.log(`Case #${i}: ${A + B}`)
}
