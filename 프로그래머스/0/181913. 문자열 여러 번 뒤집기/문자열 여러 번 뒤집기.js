function solution(my_string, queries) {
    let answer = [...my_string]
    let sol = ''
    
    for (let arr of queries) {
        const idx = arr[1] - arr[0]
        sol = answer.slice(arr[0], arr[1] + 1).reverse()
        
        answer.splice(arr[0], idx + 1)
        answer.splice(arr[0], 0, ...sol)
    }
    
    return answer.join('')
}

