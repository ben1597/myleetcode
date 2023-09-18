/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return search(nums, target, 0, nums.length - 1)
};

function search(nums, target, left, right) {
    if(left > right) return left
    if(left === right) return nums[left] >= target ? left : left + 1

    const midIndex = Math.floor((right + left) / 2)
    const mid = nums[midIndex]

    if(mid < target) return search(nums, target, midIndex + 1, right)
    else return search(nums, target, left, midIndex - 1)
}
// @lc code=end

