function solution(polynomial) {
    const arr = polynomial.split(' + ')
    const answer = []
    let num = 0
    let xNum = 0
    
    arr.forEach((n) => {
        if (n.includes('x')) {
            let xVal = n.replace('x', '') || '1'
            xNum += Number(xVal)
        } else {
            num += Number(n)
        }
            
    })

    if (xNum) answer.push(`${xNum === 1 ? '' : xNum}x`)
    if (num) answer.push(num)

    return answer.join(' + ')
}