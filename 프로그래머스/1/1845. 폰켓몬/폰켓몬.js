function solution(nums) {
    let answer = [];
    let Max = nums.length / 2;
        
    for(let i = 0; i < nums.length; i++) {
        if(answer.length < Max) {
            if(!answer.includes(nums[i])) {
                answer.push(nums[i]);
            }
        }
    }
    
    return answer.length;    
}