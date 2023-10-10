function solution(my_string) {
    let answer = my_string.split(' ')
    let num = Number(answer[0])

    for(let i = 1; i < answer.length; i++) {
        if(answer[i] === '+') {
            num += Number(answer[i + 1])
        }
        else if(answer[i] === '-') {
            num -= Number(answer[i + 1])
        }
    }
    return num
}