function solution(balls, share) {
    let answer = 0;
    let bf= 1
    let bsf = 1 
    let sf = 1
    
    for(let i = 1; i <= balls; i++) {
        bf *= i
    }
    for(let i = 1; i <= balls - share; i++) {
        bsf *= i
    }
    for(let i = 1; i <= share; i++) {
        sf *= i
    }
    
    return Math.round(bf / (bsf * sf))
}