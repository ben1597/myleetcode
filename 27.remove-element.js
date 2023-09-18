/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {;
    let slowIndex = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[slowIndex++] = nums[i]
        }
    }

    return slowIndex
};
// @lc code=end

/** 
双指针法
双指针法（快慢指针法）： 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。

定义快慢指针

快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
慢指针：指向更新 新数组下标的位置
*/