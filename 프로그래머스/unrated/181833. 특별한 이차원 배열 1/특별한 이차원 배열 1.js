function solution(n) {
    let arr = Array(n).fill(Array(n).fill(0))
    
    return arr.map((an, ai) => {
        return an.map((bn, bi) => bi === ai ? 1 : bn)
    })
}