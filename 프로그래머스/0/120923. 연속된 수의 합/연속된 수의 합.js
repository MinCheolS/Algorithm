function solution(num, total) {
    const answer = []
    const avg = Math.ceil(total / num)
    const n = Math.floor(num / 2)
    const startNum = avg - n

    for (let i = 0; i < num; i++) {
        answer.push(startNum + i)
    }
    
    return answer
}