// function solution(array, n) {
//     let near = 0;
//     let abs = 0
//     let min = 100
    
//     for(let i = 0; i < array.length; i++) {
//         abs = Math.abs(array[i] - n)
//         console.log('abs', abs)
//         if(abs < min) {
//             min = abs
//             near = array[i]
//             console.log('min', min)
//             console.log('near', near)
            
//         }
//     }
    
//     return near;
// }

function solution(array, n) {
    array.sort((a, b) => a-b);
    let a = 0;
    let b = 0;
    let answer = [];

    for (let i = 0; i < array.length; i++) {
        answer.push(Math.abs(n-array[i]))
        a = Math.min(...answer);
        b = answer.indexOf(a)
    } return array[b]
}