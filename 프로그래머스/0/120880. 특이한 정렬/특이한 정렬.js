function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const [numA, numB] = [Math.abs(n - a), Math.abs(n - b)]
        
        if (numA === numB) return b - a
        
        return numA - numB
    })
}
