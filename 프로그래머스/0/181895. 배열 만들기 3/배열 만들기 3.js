function solution(arr, intervals) {
    const answer = intervals.map((n) => arr.slice(n[0], n[1] + 1))
    return [...answer[0], ...answer[1]]
}