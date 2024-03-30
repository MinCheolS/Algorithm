function solution(a, d, included) {
    let answer = 0
    
    for (let i = 0; i < included.length; i++) {
        let num = a + (i * d)
        if (included[i] === true) answer += num
    }
    
    return answer
}