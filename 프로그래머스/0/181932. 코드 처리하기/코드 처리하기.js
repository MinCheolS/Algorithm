function solution(code) {
   let mod = 0
   
   return [...code].reduce((acc, cur, idx) => {
       if (mod === 0) {
           if (cur !== '1' && idx % 2 === 0) return acc + cur
           if (cur === '1') mod = 1
       }
       else {
           if (cur !== '1' && idx % 2 === 1) return acc + cur
           if (cur === '1') mod = 0
       }
       return acc
   }, '') || 'EMPTY'
}
