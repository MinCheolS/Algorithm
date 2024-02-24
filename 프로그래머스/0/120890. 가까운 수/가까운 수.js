function solution(array, n) {
    const answer = []
    let num = 0
    let result = 0
    
    array.sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        answer.push(Math.abs(n - array[i]))
    }
    num = Math.min(...answer)
    result = answer.indexOf(num)
    
    return array[result]
}