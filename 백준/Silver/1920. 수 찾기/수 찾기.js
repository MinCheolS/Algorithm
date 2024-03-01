let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[1].split(' ');
const M = input[3].split(' ');
N.sort((a, b) => a - b);
const set = new Set(N);
const answer = M.map((i) => (set.has(i) ? 1 : 0));
console.log(answer.join('\n'));