function solution(n) {
    return Number(String(n).split('').reduce((acc, cur) => +acc + +cur))
}