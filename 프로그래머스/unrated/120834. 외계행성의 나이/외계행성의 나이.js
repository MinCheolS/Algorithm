function solution(age) {
    let spalling = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let answer = ''
    age = age.toString()

    for(let i = 0; i < age.length; i++) {
        answer += spalling[age[i]]
    }
    
    return answer
}