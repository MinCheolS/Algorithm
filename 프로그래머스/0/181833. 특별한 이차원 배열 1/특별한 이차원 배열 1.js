function solution(n) {
    const arr = Array(n).fill(Array(n).fill(0))
    
    return arr.map((arA, idxA) => {
        return arA.map((arB, idxB) => idxA === idxB ? 1 : arB)
    })
}