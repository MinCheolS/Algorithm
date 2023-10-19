function solution(numbers, k) {
    let length = numbers.length;  
    
    return numbers[2 * (k - 1) % length];
}