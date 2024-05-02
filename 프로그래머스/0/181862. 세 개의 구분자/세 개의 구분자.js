function solution(myStr) {
    const arr = myStr.split(/[a|b|c]/g).filter(a => a)

    return arr.length ? arr : ['EMPTY']
}