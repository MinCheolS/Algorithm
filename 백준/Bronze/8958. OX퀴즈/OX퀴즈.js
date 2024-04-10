let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 1; i < input.length; i++) {
  const arr = input[i].split('');
  let answer = 0;
  let num = 1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 'O') {
      answer += num;
      num++;
    } else {
      num = 1;
    }
  }
  console.log(answer);
}