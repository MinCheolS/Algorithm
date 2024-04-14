let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(' ');
  for (let j = 0; j < arr.length; j++) {
    const word = arr[j].split('').reverse().join('');
    answer += word + ' ';
  }
  answer += '\n';
}
console.log(answer);