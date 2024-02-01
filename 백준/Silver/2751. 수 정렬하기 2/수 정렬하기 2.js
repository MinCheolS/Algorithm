let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((item) => Number(item))

input.shift()
input.sort((a, b) => a - b)
console.log(input.join('\n'))