function solution(picture, k) {
    let answer = [];
    
    picture.forEach((v) => {
        let arr = [...v].reduce((acc, cur) => acc + cur.repeat(k), '')

        for(let i = 0; i < k; i++) answer.push(arr)
    })
    
    return answer;
}