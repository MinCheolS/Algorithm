function solution(numLog) {
    let answer = ''
    
    for (let i = 0; i < numLog.length; i++) {
        const exp = numLog[i + 1] - numLog[i]
        
        if (exp === 1) answer += 'w'
        if (exp === -1) answer += 's'
        if (exp === 10) answer += 'd'
        if (exp === -10) answer += 'a'
    }
    
    return answer
}
