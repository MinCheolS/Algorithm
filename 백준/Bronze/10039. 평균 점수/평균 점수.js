let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = 0;
for (let i = 0; i < input.length; i++) {
  if (+input[i] < 40) answer += 40;
  else answer += +input[i];
}
console.log(answer / input.length);