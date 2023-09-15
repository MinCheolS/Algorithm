function solution(number, n, m) {
    let answer = 0;
    
    let nNumber = number % n
    let mNumber = number % m
    
    console.log(nNumber)
    console.log(mNumber)
    // if((nNumber === 0) || (mNumber === 0) === 0) {
    //     return 1
    // }
    
    if((nNumber || mNumber) === 0) {
        return 1
    }
    
    else {
        return 0
    }
}