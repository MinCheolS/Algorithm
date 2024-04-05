function solution(arr, queries) {
    const answer = []
    
    for (let [s, e, k] of queries) {
        const num = arr.filter((n, i) => i >= s && i <= e && k < n).sort((a, b) => a - b)[0]
        answer.push(num ? num : -1)
    }
    
    return answer
}
