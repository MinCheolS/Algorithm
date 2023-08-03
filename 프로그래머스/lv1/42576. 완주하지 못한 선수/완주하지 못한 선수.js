// function solution(pa, co) {
//     var answer = '';
//     pa.sort()
//     co.sort()
    
//     for(i = 0; i < pa.length; i++) {
//         if(pa[i] !== co[i]) {
//             return pa[i]
//         }
//     }
// }


function solution(pa, co) {
    let answer = ''
    
    let hashMap = new Map()
    
    for (p of pa) {
        hashMap.set(p, hashMap.get(p) + 1 || 1)
    }
    
    for (c of co) {
        if(hashMap.get(c) === 1) {
            hashMap.delete(c)
        }
        else {
            hashMap.set(c, hashMap.get(c) - 1)
        }
    }
    
    for (let [key, value] of hashMap) {
        answer = key
    }
  return answer    
}