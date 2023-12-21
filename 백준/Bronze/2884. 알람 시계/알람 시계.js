let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const h = +input[0]
const m = +input[1]

if(m >= 45) {
  console.log(h, m - 45)
} else {
  console.log(h === 0 ? 23 : h - 1, m + 60 - 45)
}

