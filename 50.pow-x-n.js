/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const result = calc_pow(x, Math.abs(n))
    if(n >= 0) return result
    return 1 / result
};

function calc_pow(x, n) {
    if(x === 0) return 0
    if(n === 0) return 1
    
    let res = calc_pow(x, Math.floor(n/2))

    if(n % 2 === 1) return x * res * res

    return res * res
}
// @lc code=end

21