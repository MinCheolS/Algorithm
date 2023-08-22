// function solution(arr) {
//     let answer = [];
    
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !== arr[i+1]) {
//             answer.push(arr[i])
//         }
//     }
//     return answer;
// }

function solution(arr) {
    let answer = [];
    
    for(let num of arr) {
        if(answer.length === 0 || num !== answer[answer.length - 1]) {
            answer.push(num)
        }
    }
    return answer;
}