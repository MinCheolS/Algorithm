function solution(n) {
    let answer = 0;
    
    if(n / 7 <= 1) answer = 1
    
    else answer = Math.ceil(n / 7)
    console.log(n / 7)
    
    return answer;
}