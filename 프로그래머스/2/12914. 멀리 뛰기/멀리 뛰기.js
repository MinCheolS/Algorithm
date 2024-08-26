function solution(n) {
    const jump = Array.from({length:n}).fill(0)
    jump[0] = 1
    jump[1] = 1

    for (let i = 2; i <= n; i++) {
        jump[i] = (jump[i - 2] + jump[i - 1]) % 1234567
    }

    return jump[n]
}