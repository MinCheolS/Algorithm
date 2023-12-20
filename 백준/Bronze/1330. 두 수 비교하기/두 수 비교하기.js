let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = +input[0]
const B = +input[1]

if(A > B) console.log('>')
else if(A < B) console.log('<')
else if(A === B) console.log('==')