function solution(s) {
    const numB = s.split(' ').map(Number).sort((a, b) => a - b)
    const numS = s.split(' ').map(Number).sort((a, b) => b - a)
    
    return [numB[0], numS[0]].join(' ')
}