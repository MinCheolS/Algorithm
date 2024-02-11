let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let sum = 0;

for (let i = 0; i < input.length; i++) {
  let arr = +input[i].split('').reverse().join('');

  sum += arr;
}

let answer = +sum.toString().split('').reverse().join('');

console.log(answer);