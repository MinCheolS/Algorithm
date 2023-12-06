function solution(N, stages) {
    let answer = [];

    for(let i = 1; i <= N; i++) {
        let cur = stages.filter((n) => i === n).length
        let total = stages.filter((n) => i <= n).length
        answer.push([i, cur/total])
    }  
    
    return answer.sort((a, b) => b[1] - a[1]).map((x) => x[0])

}