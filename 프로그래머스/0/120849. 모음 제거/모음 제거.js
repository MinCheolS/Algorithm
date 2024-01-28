function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    
    return my_string.split('').filter((arr) => !vowel.includes(arr)).join('')
}