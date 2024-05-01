function solution(my_string, is_suffix) {
    for (let i = 0; i < my_string.length; i++) {
        let answer = my_string.substring(i)
        
        if (answer === is_suffix) return 1

    }
    return 0
}