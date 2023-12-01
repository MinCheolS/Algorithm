function solution(name, yearning, photo) {
    let memory = {}
    
    for(let i = 0; i < name.length; i++) {
        memory[name[i]] = yearning[i]
    }
    
    return photo.map((arr) => 
        arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
    )
}