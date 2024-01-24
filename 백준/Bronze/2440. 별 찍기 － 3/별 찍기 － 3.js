let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const num = +input

for (let i = num; i >= 1; i--) {
  console.log('*'.repeat(i))
}
