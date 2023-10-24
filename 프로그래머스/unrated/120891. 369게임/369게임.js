function solution(order) {
    let answer = 0;
    let a = order.toString().split('')
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] === '3' || a[i] === '6' || a[i] === '9')
            answer++
    }
    return answer;
}