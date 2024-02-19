let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
for (let i = 1; i <= +input[0]; i++) {
  const answer = [];
  let arr = input[i].split(' ');
  let leng = arr.length;

  for (let j = 0; j < leng; j++) {
    answer.push(arr.pop());
  }
  console.log(`Case #${i}: ${answer.join(' ')}`);
}