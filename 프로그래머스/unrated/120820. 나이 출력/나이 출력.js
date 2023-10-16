function solution(age) {
    let today = new Date();
    let answer = today.getFullYear() - age
    return answer;
}