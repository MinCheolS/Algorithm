let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input.sort((a, b) => a - b);
console.log(input.join(' '));