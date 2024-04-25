let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B, C] = input;
const num = +A + +B - +C;
const arr = +(A + B) - +C;
console.log(num);
console.log(arr);