function solution(n, control) {
    let controllist = {
        w : 1,
        s : -1,
        d : 10,
        a : -10
    } 
    
    return [...control].reduce((acc, cur) => acc + controllist[cur], n)
}