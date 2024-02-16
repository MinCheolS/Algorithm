function solution(sizes) {
    let answer = 0
    let result, result1
    const maxNum = []
    const minNum = []
    
    for (let i = 0; i < sizes.length; i++) {
        maxNum.push(Math.max.apply(null, sizes[i]))
    }
    
    for (let i = 0; i < sizes.length; i++) {
        minNum.push(Math.min.apply(null, sizes[i]))
    }
    
    result = Math.max(...maxNum)
    result1 = Math.max(...minNum)
    
    answer = result * result1
    
    return answer
}
