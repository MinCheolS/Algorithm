let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const stack = []
const answer = []

for (let i = 1; i < input.length; i++) {
  let arr = input[i].includes('push') ? input[i].split(' ') : input[i]
  switch (arr.length === 2 ? arr[0] : arr) {
    case 'push' :
      stack.push(arr[1])
      break
    
    case 'pop' :
      answer.push(stack.pop() || -1)
      break

    case 'size' :
      answer.push(stack.length)
      break

    case 'empty' :
      answer.push(stack[0] ? 0 : 1)
      break

    case 'top' :
      answer.push(stack[stack.length - 1] || -1)
      break
  }
}
console.log(answer.join('\n'))
