let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 1; i < input.length; i++) {
  let arr = input[i].split('').reverse().join('');
  console.log(arr);
}