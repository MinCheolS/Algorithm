function solution(arr, intervals) {
    let answer = intervals.map((n, idx) => arr.slice(n[0], n[1] + 1))
    
    return [...answer[0], ...answer[1]];
}