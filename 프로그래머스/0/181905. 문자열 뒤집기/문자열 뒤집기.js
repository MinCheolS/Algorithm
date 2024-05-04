function solution(my_string, s, e) {
    const arr = [...my_string]
    const ReArr = arr.slice(s, e + 1).reverse()
    
    arr.splice(s, ReArr.length, ...ReArr)
    
    return arr.join('')
}
