function solution(l, r) {
    const answer = []
    
    for (let i = l; i <= r; i++) {
        if (i % 5 !== 0) continue
        
        const r = String(i)
        if (![...r].every((n) => n === '0' || n === '5')) continue
        
        answer.push(i)
    }
    
    return answer.length === 0 ? [-1] : answer
}
    

    