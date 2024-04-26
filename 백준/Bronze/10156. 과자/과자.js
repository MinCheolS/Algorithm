let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [K, N, M] = input;
let answer = K * N - M;
if (answer <= 0) answer = 0;
console.log(answer);