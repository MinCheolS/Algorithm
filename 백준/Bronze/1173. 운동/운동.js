let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const [targetTime, min, max, increase, decrease] = input;
let time = 0;
let exerciseTime = 0;
let heartbeat = min;

for (time; exerciseTime < targetTime; time++) {
  if (min + increase > max) break;
  if (heartbeat + increase <= max) {
    heartbeat += increase;
    exerciseTime++;
  } else {
    heartbeat = Math.max(min, heartbeat - decrease);
  }
}

console.log(exerciseTime === targetTime ? time : -1);