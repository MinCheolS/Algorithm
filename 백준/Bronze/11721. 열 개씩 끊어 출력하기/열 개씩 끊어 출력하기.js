let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
for (let i = 0; i < input.length; i += 10) {
  console.log(input.substring(i, i + 10));
}