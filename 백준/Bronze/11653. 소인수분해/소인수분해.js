let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const answer = [];
let num = +input;
for (let i = 2; i <= num; i++) {
  while (num % i === 0) {
    num /= i;
    answer.push(i);
  }
}
console.log(answer.join('\n'));
