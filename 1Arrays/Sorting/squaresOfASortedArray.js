/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = [];
    let n = nums.length;
    for(let i = 0; i < n; i++) {
        result.push(nums[i]**2);
    }
    result.sort((x, y) => x - y);
    return result;
};