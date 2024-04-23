let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const N = +input[0];
const M = +input[1];
let answer = '';
const sol = 100 * N;
if (sol >= M) answer = 'Yes';
else answer = 'No';
console.log(answer);