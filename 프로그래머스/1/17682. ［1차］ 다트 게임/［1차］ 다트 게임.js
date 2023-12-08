function solution(dartResult) {
    let info = { star: '*', oops: '#', Single: 'S', Double: 'D', Triple: 'T' }
    let score = 0, scores = []
    
    for(let i = 0; i < dartResult.length; i++) {
        if(!isNaN(dartResult[i])) {
            score = +dartResult[i - 1] === 1 ? 10 : +dartResult[i]
        }
        else {
            switch(dartResult[i]) {
                case info.Single:
                    scores.push(score)
                    break
                case info.Double:
                    scores.push(Math.pow(score, 2))
                    break
                case info.Triple:
                    scores.push(Math.pow(score, 3))
                    break
                case info.star:
                    if(0 <= scores.length - 2) {
                        scores[scores.length - 2] *= 2
                    }
                    scores[scores.length - 1] *= 2
                    break
                case info.oops:
                    scores[scores.length - 1] *= -1
                    break
            }
        }
    }
    
    return scores.reduce((acc, cur) => acc + cur)
}