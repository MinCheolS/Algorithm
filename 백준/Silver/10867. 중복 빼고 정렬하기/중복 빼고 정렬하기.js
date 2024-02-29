let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ');
arr.sort((a, b) => a - b);
const set = new Set(arr);
console.log(...set);