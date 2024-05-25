function solution(arr, queries) {
    queries.map((num) => {
        const [startNum, endNum] = num

        for (let i = startNum; i <= endNum; i++) {
            arr[i] += 1
        }
    })
                
    return arr
}