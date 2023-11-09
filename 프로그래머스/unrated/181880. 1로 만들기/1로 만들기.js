function solution(num_list) {
    let count = 0;
    
    for(e of num_list) {
        let num = e
        
        while(num !== 1) {
            if(num % 2 === 0) {
                num /= 2
            }
            else {
                num -= 1
                num /= 2
            }
            count++
        }
    }
    
    return count;
}