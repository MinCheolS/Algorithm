function solution(emergency) {
    let arr = emergency.slice().sort((a, b) => b - a)

    return emergency.map((num) => arr.indexOf(num) + 1)
}