function solution(players, callings) {
    let map = {}
    
    for(let i = 0; i < players.length; i++) {
        map[players[i]] = i
    }
    
    callings.forEach((player) => {
        let index = map[player]
        let nextplayer = players[index - 1]
        
        players[index -1] = player
        players[index] = nextplayer
        
        map[player]--
        map[players[index]]++
    })

    return players;
}