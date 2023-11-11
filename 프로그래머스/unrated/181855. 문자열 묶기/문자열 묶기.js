function solution(strArr) {
    let answer = []
    let MaxNum = Math.max(...strArr.map((a) => a.length))
    
    for(let i = 1; i <= MaxNum; i++) {
        const arr = strArr.filter((a) => a.length === i)
        answer.push(arr.length)
    }

    return Math.max(...answer)
}