function solution(spell, dic) {
    return dic.filter((arr) => spell.every((r) => arr.includes(r))).length ? 1 : 2
}
