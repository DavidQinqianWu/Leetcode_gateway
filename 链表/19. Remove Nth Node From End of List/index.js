/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 我们需要dummy是为了防止 n 指向了最回头, 那么 targetPrevious有可能为null ,所以我们先建一个假的,防止找到的为null
    let dummy = new ListNode(-1);
    dummy.next = head;
    let targetPrevious = findN(dummy, n + 1);
    targetPrevious.next = targetPrevious.next.next;
    return dummy.next;
};

// 首先我们来完成找到倒数第N个节点位置的function
function findN(head, n) {
    // 先命名一个指针
    let p = head;
    // 然它从头走先来N步
    for (let i = 0; i < n; i++) {
        p = p.next;
    }
    // 走完之后, 在添加另一个指针从头开始

    let q = head;
    // 当老的指针p走到底的时候(走了length-n步骤), 也就是新指针走了(length-n步骤), 那么新指针q指的就是倒数第n个
    while (p) {
        p = p.next;
        q = q.next;
    }
    return q;
}
