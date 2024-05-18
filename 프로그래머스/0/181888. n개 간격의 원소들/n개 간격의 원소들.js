function solution(num_list, n) {
    const answer = []
    
    for (let i = 0; i * n < num_list.length; i++) {
        answer.push(num_list[i * n])
    }
    
    return answer
}