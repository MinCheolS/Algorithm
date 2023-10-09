function solution(num, k) {
    let answer = num.toString().split('')
    let str = k.toString()

    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === str) {
            return i + 1
        }
    }
    return -1;
}