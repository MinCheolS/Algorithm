let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const answer = [];
let numA = input[0].split('');
let numB = input[1].split('');
for (let i = 0; i < numA.length; i++) {
  if (numA[i] === '6') numA[i] = '5';
  if (numB[i] === '6') numB[i] = '5';
}
answer.push(Number(numA.join('')) + Number(numB.join('')));
for (let i = 0; i < numA.length; i++) {
  if (numA[i] === '5') numA[i] = '6';
  if (numB[i] === '5') numB[i] = '6';
}
answer.push(Number(numA.join('')) + Number(numB.join('')));
console.log(answer.join(' '));