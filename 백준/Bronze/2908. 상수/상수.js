let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = [...input[0]].reverse().join('')
const B = [...input[1]].reverse().join('')

console.log(Math.max(A, B))

