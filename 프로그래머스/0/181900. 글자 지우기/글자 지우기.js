function solution(my_string, indices) {
    return [...my_string].map((arr, idx) => indices.includes(idx) ? 0 : arr).filter((arr) => arr !== 0).join('')
}