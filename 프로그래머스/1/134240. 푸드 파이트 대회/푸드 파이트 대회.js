function solution(food) {
    let answer = ''
    let reverse = ''
    let count = 0
    
    for(let i = 1; i < food.length; i++) {
        count = Math.floor(food[i] / 2)
        answer += i.toString().repeat(count)
    }
    reverse = answer.split('').reverse().join('')

    return [...answer, 0, ...reverse].join('')
}