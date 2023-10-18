function solution(numlist, n) {
    return numlist.sort((a, b) => {
        let [aNum, bNum] = [Math.abs(a - n), Math.abs(b - n)]

        if(aNum === bNum) return b - a

        return aNum - bNum
    })
}