let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(',');
const answer = input.reduce((acc, cur) => +acc + +cur, 0);
console.log(answer);