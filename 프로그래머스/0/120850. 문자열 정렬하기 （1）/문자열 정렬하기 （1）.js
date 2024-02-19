function solution(my_string) {
    let answer = []
    
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] / 1 >= 0) {
            answer.push(Number(my_string[i]))
        }
    }
    answer.sort((a, b) => a - b)
    return answer
}
