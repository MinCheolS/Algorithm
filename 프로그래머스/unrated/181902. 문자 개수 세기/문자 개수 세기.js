function solution(my_string) {
    let arr = Array(52).fill(0)
    
    my_string.split('').forEach((a, i) => {
        const charCode = my_string.charCodeAt(i)

        if(charCode >= 65 && charCode <= 90) {
            arr[charCode - 65] += 1
        }
        else if(charCode >= 97 && charCode <= 122) {
            arr[charCode - 97 + 26] += 1
        }
    })

    return arr;
}