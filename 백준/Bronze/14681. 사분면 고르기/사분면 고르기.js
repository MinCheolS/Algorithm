let fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const x = +input[0]
const y = +input[1]
let answer = 0

if(x > 0 && y > 0) answer = 1
else if(x > 0 && y < 0) answer = 4
else if(x < 0 && y > 0) answer = 2
else answer = 3

console.log(answer)