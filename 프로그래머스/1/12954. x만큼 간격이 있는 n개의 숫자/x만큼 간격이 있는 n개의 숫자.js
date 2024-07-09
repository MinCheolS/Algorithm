function solution(x, n) {
    const answer = [];
    
    for (let i = 1; i <= n; i++) {
        let s = i * x
        answer.push(s)
    }
    
    return answer;
}