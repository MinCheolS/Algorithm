function solution(quiz) {
    return quiz.map((n) => {
        const [q, a] = n.split('=')
        
        const numArr = q.trim().split(' ')
        let answer = 0

        for (let i = 0; i < numArr.length; i++) {
            if (numArr[1] === '+') answer = +numArr[0] + +numArr[2]
            else answer = +numArr[0] - +numArr[2]
        }
        return answer === Number(a) ? "O" : "X"
    })
}
