function solution(arr) {
    
    return arr.map((num) => {
        if(num >= 50 && num % 2 === 0) return num / 2
        if(num < 50 && num % 2 === 1) return num * 2
        else return num
    })
       
//     let answer = [];
    
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] >= 50 && arr[i] % 2 === 0) {
//             answer.push(arr[i] / 2)
//         }
//         else if(arr[i] < 50 && arr[i] % 2 === 1) {
//             answer.push(arr[i] * 2)
//         }
//         else {
//             answer.push(arr[i])
//         }
//     }
//     return answer;
}