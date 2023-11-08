function solution(arr, queries) {
    queries.map((num) => {
        for(let i = num[0]; i <= num[1]; i++) {
            arr[i] += 1
        }
    })
    return arr
}