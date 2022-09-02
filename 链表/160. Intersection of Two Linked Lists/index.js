/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 相当于一个链表完成之后, 去遍历另一个链表
// 如果有环, 必然会相遇, 当他们相当的时候就必然是那个相遇点
var getIntersectionNode = function (headA, headB) {
    let p1 = headA;
    let p2 = headB;
    while (p1 !== p2) {
        // 如果p1 不存在, 那么p1连接上headB 链表
        if (!p1) {
            p1 = headB;
        } else {
            p1 = p1.next;
        }

        if (!p2) {
            p2 = headA;
        } else {
            p2 = p2.next;
        }
    }
    return p1;
};
