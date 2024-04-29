let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 1; i <= +input; i++) {
  console.log(`Hello World, Judge ${i}!`);
}