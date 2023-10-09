function solution(my_string) {
    let answer = 0
    let newMy_string = my_string.replace(/[A-z]/g, " ").split(' ')
    for(let i = 0; i < newMy_string.length; i++) {
        if(Number(newMy_string[i]) / 1) {
            answer += Number(newMy_string[i])
        }
    }
    return answer
}