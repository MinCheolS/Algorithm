function solution(todo_list, finished) {
    return todo_list.filter((arr, idx) => !finished[idx])
}