function solution(num_list, n) {
    const firstNum = num_list.slice(n)
    const secNum = num_list.slice(0, n)
    
    return [...firstNum, ...secNum]
}