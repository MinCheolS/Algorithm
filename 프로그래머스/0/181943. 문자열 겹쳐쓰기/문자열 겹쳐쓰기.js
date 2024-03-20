function solution(my_string, overwrite_string, s) {
    const a = my_string.slice(0, s) + overwrite_string
    const b = my_string.slice(a.length)
    return a + b
}