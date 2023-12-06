function solution(k, score) {
    let answer = [];
    let stack = []
    let arr = []
    
    for(let i = 0; i < score.length; i++) {
        stack.push(score[i])
        
        if(i < 3) {
            answer.push(Math.min(...stack))
        }
        
        else {
            arr = stack.sort((a, b) => b - a).slice(0, k)
            answer.push(Math.min(...arr))
        }
    }
    
    return answer;
}