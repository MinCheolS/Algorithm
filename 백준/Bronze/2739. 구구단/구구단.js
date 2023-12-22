let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const number = +input[0]

for (let i = 1; i < 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`)
}
