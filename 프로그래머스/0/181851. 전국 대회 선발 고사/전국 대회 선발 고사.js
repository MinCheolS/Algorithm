function solution(rank, attendance) {
    const [a, b, c] = rank
        .map((n, i) => [n, i])
        .filter((_, i) => attendance[i])
        .sort(([q], [w]) => q - w)

    return 10000 * a[1] + 100 * b[1] + c[1]
}
