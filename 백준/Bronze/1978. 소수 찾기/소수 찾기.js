let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const leng = +input[0]
const arr = input[1].split(' ')
let count = 0

for (let i = 0; i < leng; i++) {
  isPrime(+arr[i])
}

function isPrime(num) {
  if (num === 1) return
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return
  }
  return count++
}

console.log(count)
