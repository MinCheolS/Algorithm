let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const R1 = input.split(' ')[0]
const S = input.split(' ')[1]

console.log(S * 2 - R1)