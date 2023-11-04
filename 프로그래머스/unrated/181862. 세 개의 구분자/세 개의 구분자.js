function solution(myStr) {
//     let arr = myStr.split(/[a|b|c]/g).filter(a => a)

//     return arr.length ? arr : ['EMPTY']
    const tmp1 = myStr.split("a").join("b")
    const tmp2 = tmp1.split("b").join("c")
    const tmp3 = tmp2.split("c").filter(x => x)
    if (tmp3.length === 0) return ["EMPTY"]
    return tmp3
}