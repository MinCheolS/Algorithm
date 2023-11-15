function solution(arr, queries) {
    let answer = []
    
    for(let [s, e, k] of queries) {
        let q = arr.filter((v, i) => i >= s && i <= e && v > k).sort((a, b) => a - b)[0]
        answer.push(q ? q : -1)
    }
   
    return answer;
}