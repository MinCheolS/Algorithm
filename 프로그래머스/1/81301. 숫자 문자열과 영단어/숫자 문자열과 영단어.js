function solution(s) {
    let Num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    for(let i = 0; i < Num.length; i++) {
        let arr = s.split(Num[i])
        s = arr.join(i)
    }
    
    return Number(s)
}