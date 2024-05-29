function solution(strArr) {
    return strArr.map((arr, idx) => 
        idx % 2 === 1 ? arr.toUpperCase() : arr.toLowerCase()                 
    )
}
