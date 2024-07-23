function solution(lottos, win_nums) {
    let answer = [];
    let count = 0
    let wincount = 0
    for(let i = 0; i < lottos.length; i++) {
        if(lottos[i] === 0) {
            count++
        }
        for(let j = 0; j < win_nums.length; j++) {
            if(lottos[i] === win_nums[j]) {
                wincount++
            }
        }
    }
    
    let min = 7 - wincount >= 6 ? 6 : 7 - wincount
    let max = min - count < 1 ? 1 : min - count

    answer = [max, min]
    
    return answer;
}