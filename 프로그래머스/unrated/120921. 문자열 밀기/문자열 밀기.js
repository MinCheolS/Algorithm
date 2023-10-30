function solution(A, B) {
    let a = [...A];

    for(let i = 0; i < a.length; i++) {
        if(A === B) return 0
        else {
            a.unshift(a.pop())
            
            if(a.join('') === B) return i + 1
        }
    }
    return -1
}