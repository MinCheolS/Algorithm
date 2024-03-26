function solution(number, n, m) {
    const numberN = number % n
    const numberM = number % m
    
    if ((numberN || numberM) === 0) return 1
    
    return 0
}
