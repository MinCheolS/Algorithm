let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let num = +input
let sum
let count = 0

while (true) {
  count++

  sum = Math.floor(num / 10) + num % 10
  num = (num % 10) * 10 + sum % 10

  if (num === +input) {
    break
  }
}

console.log(count)
