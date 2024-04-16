let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const word = input[0];
const boom = input[1];
const boomLength = boom.length;
const stack = [];
for (let i = 0; i < word.length; i++) {
  stack.push(word[i]);
  while (boomLength <= stack.length) {
    const temp = stack.slice(-boomLength).join('');
    if (temp === boom) stack.splice(-boomLength, boomLength);
    else break;
  }
}
console.log(stack.length ? stack.join('') : 'FRULA');