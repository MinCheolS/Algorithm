function solution(s) {  
    let answer = 0
    let a = s.split(' ')
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] === 'Z') {
            answer -= Number(a[i - 1])
        }
        else {
            answer += Number(a[i])
        }
    }
    return answer
}