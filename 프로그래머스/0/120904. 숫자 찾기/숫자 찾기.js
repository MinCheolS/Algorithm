function solution(num, k) {
    const arr = String(num).split('')
    const w = String(k)
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === w) return i + 1
    }
    
    return -1
}
