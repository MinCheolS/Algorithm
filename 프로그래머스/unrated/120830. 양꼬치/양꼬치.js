function solution(n, k) {
    let s = Math.floor(n / 10) * 2000

    return (12000 * n) + (2000 * k) - s;
}