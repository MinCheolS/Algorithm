function solution(s){
    let num = 0
    s = s.toUpperCase()

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'P') num++
        else if (s[i] === 'Y') num--
    }
    
    return num === 0 ? true : false
    
}
