function solution(a, b) {
    let answer = String(a) + b > String(b) + a ? String(a) + b : String(b) + a
    
    return Number(answer)
}