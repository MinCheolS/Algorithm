function solution(arr1, arr2) {
    const a1 = arr1.length
    const a2 = arr2.length
    let s1 = 0;
    let s2 = 0;
    
    if(a1 === a2) {
        s1 = arr1.reduce((acc, cur) => acc + cur)
        s2 = arr2.reduce((acc, cur) => acc + cur)
        
        if(s1 === s2) {
            return 0
        }
        else {
            return s1 > s2 ? 1 : -1
        }
    }
    else {
        return a1 > a2 ? 1 : -1
    }
}