function solution(brown, yellow) {
    let answer = [];
    let sum = brown + yellow
    
    for(let h = 3 ; h < sum ; h++) {
        let w = sum / h
        
        if((w-2)*(h-2)===yellow) {
            answer[0] = h
            answer[1] = w
        }
    }
    return answer;
}