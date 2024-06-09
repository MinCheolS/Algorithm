function solution(picture, k) {
    const answer = []
    
    picture.forEach((v) => {
        const arr = [...v].reduce((acc, cur) => acc + cur.repeat(k), '')
        
        for (let i = 0; i < k; i++) answer.push(arr)
    })
    
    return answer
}