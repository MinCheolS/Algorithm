function solution(common) {
    let answer = 0;
    
    if(common[1] - common[0] === common[2] - common[1]) {
        let a = common[1] - common[0]
        return common[common.length - 1] + a
    }
    
    else {
        let a = common[1] / common[0]
        return common[common.length - 1] * a
    }
}