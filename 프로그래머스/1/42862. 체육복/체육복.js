function solution(n, lost, reserve) {
    let realLost = lost.filter((i) => !reserve.includes(i)).sort((a, b) => a - b)
    let realReserve = reserve.filter((i) => !lost.includes(i)).sort((a, b) => a - b)
    
    for(let i = 0; i < realReserve.length; i++) {
        if(realLost.includes(realReserve[i] - 1)) {
            realLost = realLost.filter((n) => n !== realReserve[i] - 1)
        } 
                                       
        else if(realLost.includes(realReserve[i] + 1)) {
            realLost = realLost.filter((n) => n !== realReserve[i] + 1)
        }
    }
    
    return n - realLost.length;
}