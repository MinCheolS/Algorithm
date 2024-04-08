let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 1; i < input.length; i++) {
  if (BigInt(input[i]) % 2n === 0n) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
