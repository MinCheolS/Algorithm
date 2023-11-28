function solution(n, arr1, arr2) {
    let answer = [];

    for(let i = 0; i < n; i++) {
        let arrA = arr1[i].toString(2).padStart(n, 0)
        let arrB = arr2[i].toString(2).padStart(n, 0)
        let arrAB = ''
        
        for(let j = 0; j < n; j++) {
            arrAB += arrA[j] + arrB[j] === '00' ? ' ' : '#'
        }
        answer.push(arrAB)
    }

    return answer;
}