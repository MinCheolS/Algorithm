let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < input.length; i++) {
  const arr = input[i]
    .toLowerCase()
    .split('')
    .filter((arr) => vowels.includes(arr));

  console.log(arr.length);
}