let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const queue = [];
const answer = [];
input.shift();
for (i of input) {
  let num = i.split(' ')[1];
  i = i.split(' ')[0];
  switch (i) {
    case 'push':
      queue.push(+num);
      break;
    case 'pop':
      answer.push(queue.length !== 0 ? queue.shift() : -1);
      break;
    case 'size':
      answer.push(queue.length);
      break;
    case 'empty':
      answer.push(queue.length === 0 ? 1 : 0);
      break;
    case 'front':
      answer.push(queue[0] ? queue[0] : -1);
      break;
    case 'back':
      answer.push(queue[queue.length - 1] ? queue[queue.length - 1] : -1);
      break;
  }
}
console.log(answer.join('\n'));