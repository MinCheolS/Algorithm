let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const numA = input[0].split('');
const numB = input[1].split('');
let answer = 0;
for (let i = 0; i < numA.length; i++) {
  for (let j = 0; j < numB.length; j++) {
    answer += numA[i] * numB[j];
  }
}
console.log(answer);