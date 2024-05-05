let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let num = 1;
let block = 1;
while (block < input) {
  block += num * 6;
  num++;
}
console.log(num);
