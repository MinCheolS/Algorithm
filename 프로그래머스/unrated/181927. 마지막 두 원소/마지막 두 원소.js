function solution(num_list) {
    let L = num_list.length
    
    for(let i = 0; i < L; i++) {
        if(num_list[L-2] >= num_list[L-1]) {
            num_list.push(num_list[L-1] * 2)
            break;
        }
        else if(num_list[L-2] < num_list[L-1]) {
            num_list.push(num_list[L-1] - num_list[L-2])
            break;
        }
    }
    
    return num_list;
}