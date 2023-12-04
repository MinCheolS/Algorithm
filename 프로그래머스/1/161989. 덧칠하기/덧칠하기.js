function solution(n, m, section) {
    let answer = 0;
    let part = 0
    for(let i = 0; i < section.length; i++) {
        if(part < section[i]) {
            part = section[i] + m - 1
            answer++
        }
    }
    return answer;
}