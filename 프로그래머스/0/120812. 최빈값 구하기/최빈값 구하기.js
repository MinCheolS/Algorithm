function solution(array) {
    let answer = [];
    let obj= {}
    
    array.forEach((n) => {
    obj[n] = ++obj[n] || 1})
    
    for(let key in obj) {
        answer.push([key, obj[key]])
    }
    answer.sort((a, b) => b[1] - a[1])

    if (array.length === 1) return array[0]
    else if (answer.length > 1 && answer[0][1] === answer[1][1]) return -1
  
    return Number(answer[0][0])
}











