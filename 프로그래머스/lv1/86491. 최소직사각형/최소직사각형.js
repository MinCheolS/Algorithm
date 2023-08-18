function solution(sizes) {
    let answer = 0;
    let result, result1
    let a = []
    let b = []
    
    for(let i = 0; i < sizes.length; i++) {
        a.push(Math.max.apply(null, sizes[i]))
        b.push(Math.min.apply(null, sizes[i]))
    }
    
    result = Math.max(...a)
    result1 = Math.max(...b)
   
    answer = result * result1

    return answer
}