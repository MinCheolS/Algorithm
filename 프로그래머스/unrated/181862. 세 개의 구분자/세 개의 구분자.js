function solution(myStr) {
    let arr = myStr.split(/[a|b|c]/g).filter(a => a)

    return arr.length ? arr : ['EMPTY']
}