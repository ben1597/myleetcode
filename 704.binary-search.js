/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return b_search(nums, target, 0, nums.length - 1)
};

function b_search(nums, target, left, right) {
    if(left > right) return -1

    const mid = Math.floor((left + right) / 2)

    console.log(target, left, right, mid, nums[mid])
    if(nums[mid] === target) return mid

    if(nums[mid] < target) {
        return b_search(nums, target, mid + 1, right)
    } else {
        return b_search(nums, target, left, mid - 1)
    }
}
// @lc code=end

