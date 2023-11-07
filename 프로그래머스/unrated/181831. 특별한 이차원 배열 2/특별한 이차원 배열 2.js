function solution(arr) {
    let answer = 0;
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === arr[j][i]) {
                answer += 1
            }
            else {
                answer -= 1
            }
        }
    }
    return ((arr.length * arr.length) / answer) === 1 ? 1 : 0
}