function solution(score) {
    let average = score.map((n) => (n[0] + n[1]) / 2)
    
    let sort = average.slice().sort((a, b) => b - a)
    
    return average.map((s) => sort.indexOf(s) + 1)
}