function solution(n) {
    let answer = 0;
    console.log(12%6)
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            answer += i
        }
    }
    return answer;
}