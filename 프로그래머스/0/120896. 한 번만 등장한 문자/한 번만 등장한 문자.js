function solution(s) {
    const answer = []
    const arr = s.split('')
    
    arr.forEach((item) => {
        if (arr.indexOf(item) === arr.lastIndexOf(item)) {
            answer.push(item)
        }
    })
    
    return answer.sort().join('')
}