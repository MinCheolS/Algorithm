function solution(myString, pat) {
    let answer = 0
    
    for (let i = 0; i < myString.length; i++) {
        const arr = myString.slice(i, pat.length + i)
        
        if (arr === pat) answer++
    }
    
    return answer
}