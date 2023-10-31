function solution(num, total) {
    let answer = [];
    
    let avg = Math.ceil(total / num)
    let n = Math.floor(num / 2)
    
    let starNum = avg - n

    for(let i = 0; i < num; i++) {
        answer.push(starNum + i)
    }
    return answer;
}