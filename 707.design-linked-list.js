/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start
class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

function showNodeList(text, list) {
    let node = list;
    let result = [];
    let index = 0;
    while(node) {
        result.push(node.val);
        node = node.next;
        index++;
    }
    console.log(text, index, result);
}


var MyLinkedList = function() {
    this._list = null;
    // this._size = 0;
    // this._tail = null;
    // this._head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let node = this._list;
    if(!node) return -1;

    for(let i=0;i<index;i++) {
        if(node && node.next === null) return -1;
        node = node.next;
    }
    // if(index < 0 || index >= this._list.) return null;
    // let cur = new LinkNode(0, this._head);
    // while(index-- > 0) {
    //     cur = cur.next
    // }
    // console.log('get', index, node.val)
    return node.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    // console.log('addAtHead', val);
    this._list = new LinkNode(val, this._list);
    // showNodeList('addAtHead', this._list);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    // console.log('addAtTail', val);
    let node = this._list;
    if(!node) {
        node = new LinkNode(val, null);
        this._list = node;
        return;
    }

    while(node.next) {
        node = node.next;
    }
    node.next = new LinkNode(val, null);
    // showNodeList('addAtTail', this._list);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // console.log('addAtIndex', index, val);
    let node = this._list;

    if(node === null) {
        if(index > 0) return;
        node = new LinkNode(val, null);
        this._list = node;
        return;
    }

    if(index === 0) {
        node = new LinkNode(val, this._list);
        this._list = node;
        return;
    }

    for(let i=0;i<=index;i++) {
        if(node === null) return;
        if(i === index-1) {
            // if(!node) node = new LinkNode(val, null);
            // else node.next = new LinkNode(val, node.next);
            node.next = new LinkNode(val, node.next);
        }
        node = node.next;
    }
    // showNodeList('addAtIndex', this._list);
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // console.log('deleteAtIndex', index);
    let node = this._list;
    if(!node) return;

    if(index === 0) {
        node = node.next;
        this._list = node;
        return;
    }

    for(let i=0;i<index;i++) {
        if(!node || node.next === null) return;
        if(i === index-1) node.next = node.next?.next ?? null;
        node = node.next;
    }
    // showNodeList('deleteAtIndex',this._list);
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

// ["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex",
//     "deleteAtIndex","addAtHead","addAtTail","get","addAtHead",
//     "addAtIndex","addAtHead"]
// [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]
// const myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(7);
// myLinkedList.addAtHead(2);
// myLinkedList.addAtHead(1);
// myLinkedList.addAtIndex(3, 0);
// myLinkedList.deleteAtIndex(2);
// myLinkedList.addAtHead(6);
// myLinkedList.addAtTail(4);
// console.log(myLinkedList.get(4));    
// myLinkedList.addAtHead(4);
// myLinkedList.addAtIndex(5, 0);
// myLinkedList.addAtHead(6);

// ["MyLinkedList","addAtIndex","addAtIndex","addAtIndex","get"]
// [[],[0,10],[0,20],[1,30],[0]]

// const myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(2);
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtTail(2);
// myLinkedList.addAtIndex(1, 0);
// myLinkedList.addAtIndex(0, 20);
// console.log(myLinkedList.get(1));   
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(1);
// myLinkedList.addAtIndex(1, 2);
// console.log(myLinkedList.get(1));   
// myLinkedList.deleteAtIndex(1);
// console.log(myLinkedList.get(1));   

/**
Accepted
65/65 cases passed (112 ms)
Your runtime beats 64.27 % of javascript submissions
Your memory usage beats 45.63 % of javascript submissions (50.6 MB)
 */