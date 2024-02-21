function solution(n) {
    let answer = 0
    const arr = new Array(n + 1).fill(1)
    
    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) continue
        
        for (let k = i * 2; k <= n; k += i) {
            arr[k] = 0
        }
    }
    for (let i = 2; i <= n; i++) {
        if (arr[i] === 1) answer++
    }
    
    return answer
}
