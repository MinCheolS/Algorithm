let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const num = input.split(' ').join('')

console.log(num === `12345678` ? 'ascending' : num === '87654321' ? 'descending' : 'mixed')