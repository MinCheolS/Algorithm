function solution(number, limit, power) {
    let answer = 0
    
    for(let i = 1; i <= number; i++) {
        let num = 0
        for(let j = 1; j <= i / 2; j++) {
            if(i % j === 0) num += 1
        }
        num += 1
        
        if(num > limit) answer += power
        else answer += num
    }
    
    return answer
}