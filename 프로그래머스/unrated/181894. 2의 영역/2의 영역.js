function solution(arr) {
    let startNum = arr.indexOf(2)
    let lastNum = arr.lastIndexOf(2)
    
    return startNum === -1 ? [-1] : arr.slice(startNum, lastNum + 1)
}