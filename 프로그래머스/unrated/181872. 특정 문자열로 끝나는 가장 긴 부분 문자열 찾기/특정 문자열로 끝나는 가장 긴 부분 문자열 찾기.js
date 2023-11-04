function solution(myString, pat) {
//     let answer = ''
    
//     for(let i = 0; i < myString.length; i++) {
//         let arr = myString.slice(i, pat.length + i)
        
//         if(arr === pat) {
//             answer = myString.slice(0, pat.length + i)
//         }
//     }
    
//     return answer
    return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}