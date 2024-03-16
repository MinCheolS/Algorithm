function solution(board) {
    const x = [1, 0, -1, 0, 1, 1, -1, -1];
    const y = [0, 1, 0, -1, 1, -1, 1, -1];
    
    let n = board.length
    let answer = n * n
    let boob = []
    
    for(let i = 0; i < n; i ++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 1) {
                boob.push([i, j])
                answer--
            }
        }
    }
    
    if(answer === 0) return 0

    boob.forEach((e) => {
        for(let k = 0; k < 8; k++) {
            let nx = e[0] + x[k]
            let ny = e[1] + y[k]
            
            if(nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
                board[nx][ny] = 1
                answer--
            }
        }
    })
    
    return answer;
}

