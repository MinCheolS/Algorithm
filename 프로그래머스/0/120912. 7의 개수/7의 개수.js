function solution(array) {
    const arr = array.join('').split('')
    let answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '7') answer++
    }
    
    return answer
}
