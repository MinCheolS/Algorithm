function solution(arr) {
    let answer = 0
    
    while (true) {
        const changeArr = arr.map((v) => {
            if (v >= 50 && v % 2 === 0) return v / 2
            if (v < 50 && v % 2 !== 0) return v * 2 + 1
            return v
        })
        
        const nextArr = arr.every((v, i) => v === changeArr[i])
        if (nextArr) break
        
        answer++

        arr = changeArr
        
    }
    
    
    return answer
}


