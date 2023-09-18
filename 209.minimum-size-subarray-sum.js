/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLenth = Infinity
    let sum = 0
    let leftIndex = 0;

    for(let i=0; i<nums.length; i++) {
        sum += nums[i]

        while(sum >= target) {
            minLenth = Math.min(minLenth, i - leftIndex + 1);
            sum -= nums[leftIndex++]
        }
    }

    return minLenth === Infinity ? 0 : minLenth
};
// @lc code=end

/**
 * 滑動窗口
 */

/**
 * Accpted
   21/21 cases passed (53 ms)
   Your runtime beats 88.62 % of javascript submissions
   Your memory usage beats 55.44 % of javascript submissions (46.1 MB)
 */