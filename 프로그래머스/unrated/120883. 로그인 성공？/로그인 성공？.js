function solution(id_pw, db) {
    let [id, pw] = id_pw
    const map = new Map(db)
    
    return map.has(id) ? map.get(id) === pw ? 'login' : 'wrong pw' : 'fail'
}