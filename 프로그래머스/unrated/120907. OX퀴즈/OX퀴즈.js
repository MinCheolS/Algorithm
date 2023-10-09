function solution(quiz) {
    return quiz.map((n) => {
        let [question, answer] = n.split('=')

        return eval(question) === Number(answer) ? "O" : "X"
    })
}