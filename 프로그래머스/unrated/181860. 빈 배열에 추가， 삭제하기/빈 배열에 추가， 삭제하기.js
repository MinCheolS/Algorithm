function solution(arr, flag) {
    let answer = []

    for(let i = 0; i < flag.length; i++) {
        if(flag[i] === true) {
            answer.push(...Array(arr[i] * 2).fill(arr[i]))
        }
        else {
            let a = answer.splice(answer.length - arr[i], arr[i])
        }
    }
    
    return answer;
}