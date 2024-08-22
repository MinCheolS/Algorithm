function solution(s) {
    let answer = ''
    let result = s.split(' ').map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());

    answer = result.join(" ")
    return answer;
}