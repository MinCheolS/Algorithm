let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const num = input.split('').sort((a, b) => b - a).join('')
console.log(num)