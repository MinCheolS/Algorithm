let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = input[1].split(' ')
const B = input[2].split(' ')
const arr = [...A, ...B]
arr.sort((a, b) => a - b)
console.log(arr.join(' '))