function solution(lines) {
    let answer = Array(200).fill(0)
    
    for (let i = 0; i < lines.length; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++) {
            answer[100 + j] += 1
        }
    }
    
    return answer.filter((n) => n > 1).length
}
