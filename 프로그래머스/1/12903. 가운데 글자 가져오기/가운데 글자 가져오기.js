function solution(s) {
    let n, m, resultn, resultm
    
    if(s.length%2==0) {
        n = s.length/2
        resultn = s[n-1] + s[n]            
        return resultn    
    }
    else {
        m = Math.ceil(s.length/2)
        resultm = s[m-1]    
        return resultm        
    }
}