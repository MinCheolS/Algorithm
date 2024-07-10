function solution(numbers) {
    var answer = [];
    let result = []
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            result.push(numbers[i] + numbers[j])
        }
    }
    result.sort(function (a, b) {
        return a - b
    })
 
    for(let s = 0; s < result.length; s++) {
        if(result[s] !== result[s+1]) {
            answer.push(result[s])
        }
    }
    return answer;
}