function solution(nums) {
    var answer = 0;
    const arr = new Set(nums);
    const newArr = Array.from([...arr]);
    answer = nums.length/2 < newArr.length? nums.length/2 : newArr.length;
    return answer;
}

solution([3,3,3,2,2,2]);

