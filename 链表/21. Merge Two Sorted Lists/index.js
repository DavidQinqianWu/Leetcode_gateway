// 解法一: 利用递归思路
// 因为都是从小到大, 起始就是利用每一个节点的merge sort的结果, 逐步合并
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        // 如果 list1 < list2
        // 那么 list1.next 就是 list1.next 和 list2 的合并结果
        l1.next = mergeTwoLists(l1.next, l2);
        // return 出最小的 list1
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// 解法二:
// 利用迭代的思路, 走遍每一个点

var mergeTwoLists = function (list1, list2) {
    // 首先建立dummy
    let dummy = new ListNode(-1);
    // p指针作为我的们当前的 游走指针
    let p = dummy;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            //如果当前list2.val 最小
            // 那么p的next指向list2
            // 同时 list2.next 成为新的 list2
            p.next = list2;
            list2 = list2.next;
        } else {
            p.next = list1;
            list1 = list1.next;
        }
        p = p.next;
    }
    // 进入到这里, 说明两个必然有一个已经结束了
    // 那么把没有结束的直接追加到末尾
    if (list1 != null) {
        p.next = list1;
    }
    if (list2 != null) {
        p.next = list2;
    }
    return dummy.next;
};
