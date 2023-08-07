function solution(progresses, speeds) {
    const answer = [];
    let init = 0;
    
    for (let i = 0; i < progresses.length; i++) {
        const days = Math.ceil((100 - progresses[i]) / speeds[i])
        if(days > init) {
            init = days
            answer.push(1);
        }
        else {
            answer[answer.length - 1]++;
        }
    }
    return answer;
}