let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const num = input.split(' ')
num.sort((a, b) => b - a)

console.log(num[1])
