function solution(n, control) {
    const s = {
        w: 1,
        s: -1,
        d: 10,
        a: -10,        
    }
    
    return [...control].reduce((acc, cur) => acc + s[cur] , n)
}