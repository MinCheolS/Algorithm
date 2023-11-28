function solution(n) {
    let numbers = new Set()
    
    for(let i = 2; i <= n; i++) {
        numbers.add(i)
    }
    
    for(let j = 2; j < Math.sqrt(n); j++) {
        if(numbers.has(j)) {
            for(let k = j * 2; k <= n; k+=j) {
                numbers.delete(k)
            }
        }
    }
    return numbers.size
}
