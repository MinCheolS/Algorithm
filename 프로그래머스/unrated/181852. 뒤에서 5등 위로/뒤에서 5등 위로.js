function solution(num_list) {
    let a = num_list.sort((a, b) => a - b)
    
    for (let i = 0; i < 5; i++) {
        a.shift()
    } 
    return a
}