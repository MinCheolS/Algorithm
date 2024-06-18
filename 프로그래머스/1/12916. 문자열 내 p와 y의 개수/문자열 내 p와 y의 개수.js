function solution(s){
    let num = 0
    s = s.toUpperCase()

    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "P") {
            num++
        }
        if(s[i] === "Y") {
            num--
        }
    }
    
    if (num === 0 ) {
        return true
    }
    else {
        return false
    }    
}