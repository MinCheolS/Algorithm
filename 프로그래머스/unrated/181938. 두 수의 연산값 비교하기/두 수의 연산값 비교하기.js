function solution(a, b) {
    let num = String(a) + b
    return Number(num) > 2 * a * b ? Number(num) : 2 * a * b
}