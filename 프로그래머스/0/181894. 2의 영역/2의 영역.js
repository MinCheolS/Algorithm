function solution(arr) {
    const startNum = arr.indexOf(2)
    const lastNum = arr.lastIndexOf(2)

    return startNum === -1 ? [-1] : arr.slice(startNum, lastNum + 1)
}