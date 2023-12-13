function solution(s, skip, index) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let alphabet = arr.filter((r) => !skip.includes(r))

    return s.split('').map((a) => alphabet[(alphabet.indexOf(a) + index) % alphabet.length]).join('')
}