function solution(clothes) {
    let answer = 1;

    // 1.해시맵 생성
    const hashMap = new Map();
    
    // 2.해시맵 맵핑
    for (let [value, key] of clothes) {
        hashMap.set(key, hashMap.get(key) + 1 || 1)
    }
    
    // 3.해시맵을 이용해 경우의 수 구하기
    for (let [key, value] of hashMap) {
        answer *= (value + 1)
    }
    
    // 4.전체 경우에서 -1을 한 값을 구한다.
    answer -= 1

    
    
    return answer;
}