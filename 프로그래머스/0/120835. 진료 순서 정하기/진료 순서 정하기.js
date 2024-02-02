function solution(emergency) {
    let arr = [...emergency].sort((a, b) => b - a)
    return emergency.map((item) => arr.indexOf(item) + 1)
}