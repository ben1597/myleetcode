/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = new Array(n)
    for(let i=0;i<n;i++) {
        result[i] = new Array(n)
    }

    let type = 0
    let row = 0, col = 0
1
    for(let i=0;i<n*n;i++) {
        
        result[row][col] = i+1
        // console.log(type +'-', row, col, result[row][col])

        switch(type) {
            case 0: // right
                col++
                if(result[row][col] !== undefined) {
                    type = (type + 1) % 4
                    col--
                    row++
                    continue
                }
                if(col === n-1) {
                    type = (type + 1) % 4
                }
                break
            case 1: // down
                row++
                if(result[row][col] !== undefined)  {
                    type = (type + 1) % 4
                    row--
                    col--
                    continue
                }
                if(row === n-1) {
                    type = (type + 1) % 4
                }
                break
            case 2: // left
                col--
                if(result[row][col] !== undefined)  {
                    type = (type + 1) % 4
                    col++
                    row--
                    continue
                }
                if(col === 0) {
                    type = (type + 1) % 4
                }
                break
            case 3: // up
                row--
                if(result[row][col] !== undefined) {
                    type = (type + 1) % 4
                    row++
                    col++
                    continue
                }
                if(row === 0) {
                    type = (type + 1) % 4
                }
                break
        }

    }

    return result
};
// @lc code=end
// console.log(generateMatrix(5))

/** 
Accepted
20/20 cases passed (50 ms)
Your runtime beats 77.95 % of javascript submissions
Your memory usage beats 74.45 % of javascript submissions (41.8 MB)
*/