function solution(num_list) {
    let sumA = 0
    let sumB = 0
    
    sumA = num_list.reduce((acc, cur) => acc * cur)
    sumB = num_list.reduce((acc, cur) => acc + cur)**2
    
    return sumA > sumB ? 0 : 1
}