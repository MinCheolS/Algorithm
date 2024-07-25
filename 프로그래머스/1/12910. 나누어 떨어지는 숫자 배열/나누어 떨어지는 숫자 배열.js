function solution(arr, divisor) {   
    arr.sort((a, b) => a - b)
    
    const newArr = arr.filter((num) => num % divisor === 0)
    
    return newArr.length === 0 ? [-1] : newArr
}