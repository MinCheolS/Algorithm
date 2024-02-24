function solution(order) {
    return String(order).split('').filter((i) => i === '3' || i === '6' || i === '9').length
}