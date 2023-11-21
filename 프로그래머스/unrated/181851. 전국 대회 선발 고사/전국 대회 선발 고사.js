function solution(rank, attendance) {
    let [a, b, c] = rank
        .map((a, i) => [a, i])
        .filter((_, i) => attendance[i])
        .sort(([a], [b]) => a - b)
    
    return 10000 * a[1] + 100 * b[1] + c[1]
}