let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

for (let i = 1; i <= +input[0]; i++) {
  console.log('*'.repeat(i))
}
