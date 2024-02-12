let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.slice(1);
let a = new Array(arr.length).fill(0);
a[1] = 1;

for (let i = 0; i < arr.length; i++) {
  let X = +arr[i].split(' ')[0];
  let Y = +arr[i].split(' ')[1];
  if (a[X] === 1) {
    [a[Y], a[X]] = [a[X], a[Y]];
  } else if (a[Y] === 1) {
    [a[X], a[Y]] = [a[Y], a[X]];
  }
}
console.log(a.indexOf(1));