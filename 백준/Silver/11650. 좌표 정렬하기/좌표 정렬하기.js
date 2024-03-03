let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();
input.sort((a, b) => {
  const [x1, y1] = a.split(' ').map(Number);
  const [x2, y2] = b.split(' ').map(Number);
  return x1 - x2 || y1 - y2;
});
console.log(input.join('\n'));