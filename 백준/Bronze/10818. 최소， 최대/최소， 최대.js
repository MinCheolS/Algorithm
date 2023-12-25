let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numList = input[1].split(' ')
let answer = ''

answer += Math.min(...numList) + ' '
answer += Math.max(...numList)

console.log(answer)