function solution(my_string, overwrite_string, s) {
    let answer = my_string.slice(0, s)
    let a = answer + overwrite_string
    let b = my_string.slice(a.length)
    return a + b
}