let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const k = input[0].split(' ')[1];
const arr = input[1].split(' ');
arr.sort((a, b) => b - a);
console.log(arr[k - 1]);