function solution(num_list, n) {
    let num = num_list.slice(n)
    
    return [...num, ...num_list.slice(0, n)]
}