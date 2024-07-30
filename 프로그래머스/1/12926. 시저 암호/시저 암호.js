function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        let a = s[i]
        
        if(a === ' ') {
            answer += ' '
            continue
        }
        
        let aArr = upper.includes(a) ? upper : lower
        let index = aArr.indexOf(a) + n

        if(index >= aArr.length) index -= aArr.length
        answer += aArr[index]
    }
    
    return answer;
}