function solution(str_list, ex) {
    let answer = '';
    
    for(let i = 0; i < str_list.length; i++) {
        if(str_list[i].includes(ex) === false) {
            answer += str_list[i]
        }
        else {
            answer += ''
        }
    }
    return answer;
}