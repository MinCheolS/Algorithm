function solution(a, b) {
    return Number(String(a) + b > String(b) + a ? String(a) + b : String(b) + a)
}