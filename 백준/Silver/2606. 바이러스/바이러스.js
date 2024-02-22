let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let node = +input[0];
let edge_num = +input[1];
let graph = [...new Array(node + 1)].map(() => []);
let visited = [...new Array(node + 1)].fill(0);
let answer = 0;

for (let i = 0; i < edge_num; i++) {
  let start = Number(input[i + 2].split(' ')[0]);
  let end = Number(input[i + 2].split(' ')[1]);
  graph[start].push(end);
  graph[end].push(start);
}
visited[1] = 1;
const dfs = (start) => {
  for (end of graph[start]) {
    if (!visited[end]) {
      visited[end] = 1;
      answer++;
      dfs(end);
    }
  }
};
dfs(1);
console.log(answer);