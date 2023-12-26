let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numList = input
const max = Math.max(...numList)
const index = numList.indexOf(`${max}`) + 1
let answer = ''

answer += max + '\n'
answer += index

console.log(answer)
