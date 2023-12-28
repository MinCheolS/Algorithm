let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  input[i] = +input[i] % 42
}
const set = new Set(input)
console.log(set.size)
