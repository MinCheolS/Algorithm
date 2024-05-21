function solution(myString, pat) {
    const my = myString.toLowerCase()
    const p = pat.toLowerCase()
    const answer = my.includes(p)
    
    return answer ? 1 : 0
}