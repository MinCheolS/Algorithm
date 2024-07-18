function solution(n) {
    var all = []
    let a = "수"
    let b = "박"
    let answer
    
    for(let i = 1; i < n+1; i++) {
        if(i%2 === 1) {
            all.push(a)
        }
        if(i%2 === 0) {
            all.push(b)
        }        
    }
      
    answer = all.reduce(function(z,x) {
        return answer = z+x
    })
    return answer
}