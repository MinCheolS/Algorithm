function solution(arr, idx) {
    for(let i = idx; i < arr.length; i++) {
        let num = arr[i]
        if(num === 1) return i
    }
    return -1
}