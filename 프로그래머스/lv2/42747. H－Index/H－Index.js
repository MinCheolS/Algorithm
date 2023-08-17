function solution(citations) {
    let answer = 0;
    
    citations.sort((a,b) => b-a)
    
    for (let i = 0; i < citations.length; i++ ) {
        if(i < citations[i]) {
            answer++
        }
    }
    return answer;
}

// function solution(citations) {
//     let i = 0;

//     while(i + 1 <= citations.sort((a, b) => b - a)[i]) i++;

//     return i;
// }