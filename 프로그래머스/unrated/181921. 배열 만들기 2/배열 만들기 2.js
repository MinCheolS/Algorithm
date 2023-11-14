function solution(l, r) {
    let answer = [];
    
    for(let i = l; i <= r; i++) {
        if(i % 5 !== 0) continue
        
        let char = String(i)
        if(![...char].every((n) => n === '5' || n === '0')) continue
        
        answer.push(i)
    }
    
    return answer.length === 0 ? [-1] : answer
}