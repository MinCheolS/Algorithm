function solution(phone_number) {
    var answer = " "
    
    let a = phone_number.slice(0,phone_number.length-4)
    let replace_a = a.replace(/[0-9]/gi, "*")
    let s = phone_number.slice(-4)

    return replace_a.concat(s)
}