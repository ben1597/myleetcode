/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = []
    let rightIndex = nums.length - 1
    for(let i=0; i<=rightIndex; i++){
        if(Math.abs(nums[i]) > Math.abs(nums[rightIndex])){
            result.push(nums[i] * nums[i])
        } else {
            result.push(nums[rightIndex] * nums[rightIndex])
            rightIndex--
            i--
        }
    }

    return result.reverse()
};
// @lc code=end

/**
 * 雙指針法
 */
