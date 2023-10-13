function solution(array) {
    let answer = 0;
    array.sort((a, b) => a - b)
    
    answer = (array.length - 1) / 2
    
    return array[answer];
}