function solution(arr, n) {
    return arr.length % 2 === 0 ? arr.map((a, i) => i % 2 !== 0 ? a + n : a ) : arr.map((a, i) => i % 2 === 0 ? a + n : a )
}