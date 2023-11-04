function solution(myStr) {
    let arr = myStr.split('a').join('_').split('b').join('_').split('c').join('_').split('_').filter((a) => a)

    return arr.length ? arr : ['EMPTY']
}