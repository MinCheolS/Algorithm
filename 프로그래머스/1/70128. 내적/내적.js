function solution(a, b) {
    var answer = 1234567890;
    let result = 0
    
    for(let i = 0; i < a.length; i++) {
            result = a[i]*b[i] + result
    }
    
    return result;
}