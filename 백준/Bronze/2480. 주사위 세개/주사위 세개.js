let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = +input[0]
const B = +input[1]
const C = +input[2]
let answer = 0

if (A === B && A === C) {
  answer = 10000 + (A * 1000)
}
else if (A === B && A !== C) {
  answer = 1000 + (A * 100)
}
else if (A === C && A !== B) {
  answer = 1000 + (A * 100)
}
else if (B === C && B !== A) {
  answer = 1000 + (B * 100)
}
else {
  answer = Math.max(A, B, C) * 100
}

console.log(answer)

