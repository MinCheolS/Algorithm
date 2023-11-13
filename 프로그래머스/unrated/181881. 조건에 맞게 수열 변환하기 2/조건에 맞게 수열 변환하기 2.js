function solution(arr) {
    let answer = 0;
    while(true) {
        let changeArr = arr.map((a) => {
            if(a >= 50 && a % 2 === 0) return a / 2
            if(a < 50 && a % 2 !== 0) return a * 2 + 1
            return a
        })
        
        let nextArr = arr.every((a, i) => a === changeArr[i])
        if(nextArr) break;
        
        answer++
        
        arr = changeArr
    }

    return answer;
}