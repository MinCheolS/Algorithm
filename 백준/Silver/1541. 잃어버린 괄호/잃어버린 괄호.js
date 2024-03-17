let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const numbers = input.split('-').map((str) =>
  str
    .split('+')
    .map(Number)
    .reduce((acc, cur) => acc + cur)
);
let answer = numbers.reduce((acc, cur) => acc - cur);
console.log(answer);