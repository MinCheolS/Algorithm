let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const leng = input.length;
const middle = Math.floor(leng / 2);
const sum = input.reduce((acc, cur) => +acc + +cur);
input.sort((a, b) => a - b);
console.log(sum / leng);
console.log(input[middle]);