function solution(arr) {
    let arrL = arr.length
    let aL = arr[0].length
    
    if(arrL > aL) {
        let gap = Array(arrL - aL).fill(0)
        return arr.map((a) => [...a, ...gap])
    }
    else if(arrL < aL) {
        for(let i = 0; i < aL - arrL; i++) {
            let gap = Array(aL).fill(0)
            arr.push(gap)
        }
    }
    
    return arr
}