let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const N = input.split(' ')[0]
const B = input.split(' ')[1]

console.log(parseInt(N, B))