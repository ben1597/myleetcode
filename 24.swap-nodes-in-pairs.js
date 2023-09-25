/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let index = 0;
    
    let ret = new ListNode(0, head), node = ret;
    // let node = head;
    while(node.next && node.next.next) {
        let cur = node.next.next, pre = node.next;
        pre.next = cur.next;
        cur.next = pre;
        node.next = cur;
        node = pre;
    }

    return ret.next
};

// @lc code=end

