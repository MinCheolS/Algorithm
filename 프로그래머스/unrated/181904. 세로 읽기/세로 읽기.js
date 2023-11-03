function solution(my_string, m, c) {
    let answer = '';
 
    for(let i = 0; i < my_string.length / m; i++) {
        let arr = my_string.slice(m * i , m * (i + 1))
        let a = arr.slice((c - 1), c)
        answer += a
    }
    
    return answer;
}