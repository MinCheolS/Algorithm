function solution(arr) {
    let length = arr.length
    let num = 0
    
    while(Math.pow(2, num) < length) num++
    
    for(let i = 0; i < (Math.pow(2, num) - length); i++) {
        arr.push(0)
    }
  
    return arr;
}