function solution(price) {
    const sale5 = Math.ceil(price * 0.05)
    const sale10 = Math.ceil(price * 0.1)
    const sale20 = Math.ceil(price * 0.2)
    
    return price < 100000 ? price :
           price < 300000 ? price - sale5 :
           price < 500000 ? price - sale10 : price - sale20
}