function solution(N, stages) {
    let answer = [];
    let stageCount = 0
    let reachedCount = 0
    let failurRate = 0
    
    // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    // 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
    // 실패율이 높은 스테이지부터 내림차순 return
    
    // 각 스테이지 별로 for문 실행
    for(let i = 1; i < N + 1; i++) {
        // 각 스테이지에 있는 인원 확인
        for(let j = 0; j < stages.length; j++) {
            // i 스테이지에 있는 인원
            if(i === stages[j]) {
                stageCount++
            }
            // i 스테이지에 있는 인원 + i 스테이지를 성공한 인원
            if(i <= stages[j]) {
                reachedCount++
            }
        }
        failurRate = stageCount / reachedCount
        
        answer.push({stageNum: i, failurRate})
        
        stageCount = 0
        reachedCount = 0 
    }
    
    return answer.sort((a, b) => b.failurRate - a.failurRate).map((item) => item.stageNum)

}