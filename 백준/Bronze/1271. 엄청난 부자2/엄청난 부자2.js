let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const A = BigInt(input.shift());
const B = BigInt(input.shift());
console.log((A / B).toString());
console.log((A % B).toString());