function solution(array, height) {
    let answer = array.filter((arr) => arr > height)
    
    return answer.length
}