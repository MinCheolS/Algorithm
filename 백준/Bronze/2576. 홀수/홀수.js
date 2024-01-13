let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let odd = input.filter((num) => +num % 2 === 1)
let oddSum = odd.length === 0 ? -1 : odd.reduce((acc, cur) => +acc + +cur)

console.log(oddSum)
console.log(odd.length === 0 ? '' : Math.min(...odd))
