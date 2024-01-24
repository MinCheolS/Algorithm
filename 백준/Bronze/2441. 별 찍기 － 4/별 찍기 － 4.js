let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const num = +input
const value = '*'.repeat(num).split('')  

for (let i = 0; i < num; i++) {
  console.log(value.join(''))
  value[i] = ' '
}
