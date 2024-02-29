let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const set = new Set(input);
console.log([...set].join('\n'));