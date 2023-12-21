let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const h = +input[0].split(' ')[0]
const m = +input[0].split(' ')[1]
const cookTime = +input[1] + m

let cookH = h + Math.floor(cookTime / 60)
let cookM = cookTime % 60

console.log(cookH >= 24 ? (cookH %= 24) : cookH, cookM)
