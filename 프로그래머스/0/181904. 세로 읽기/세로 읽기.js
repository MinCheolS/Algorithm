function solution(my_string, m, c) {
    let answer = ''
    
    for (let i = 0; i < my_string.length / m; i++) {
        const arr = my_string.slice(m * i, m * (i + 1))
        const newArr = arr.slice((c - 1), c)
        answer += newArr
    }
    
    return answer
}
