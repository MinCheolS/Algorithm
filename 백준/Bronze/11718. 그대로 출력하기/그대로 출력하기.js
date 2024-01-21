let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
