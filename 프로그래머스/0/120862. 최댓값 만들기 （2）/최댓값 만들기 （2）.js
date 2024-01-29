function solution(numbers) {
    const arrLength = numbers.length
    numbers.sort((a, b) => a - b)
    return Math.max(numbers[0] * numbers[1], 
                    numbers[arrLength - 2] * numbers[arrLength - 1])
}