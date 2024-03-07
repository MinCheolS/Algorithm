function solution(my_string) {
    const newMy_string = my_string.replace(/[A-z]/g, " ").split(' ')
    let answer = 0
    
    for (let i = 0; i < newMy_string.length; i++) {
        if (Number(newMy_string[i]) / 1) answer += Number(newMy_string[i])
    }
    
    return answer
}
