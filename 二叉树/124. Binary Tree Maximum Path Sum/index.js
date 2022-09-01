/**
 * 利用后序遍历的思想
 */

let maxSum = Number.MIN_SAFE_INTEGER;

var maxPathSum = function (root) {
    maxSum = Number.MIN_SAFE_INTEGER;
    finNodeMaxValue(root);
    return maxSum;
};

function finNodeMaxValue(node) {
    if (!node) {
        return 0;
    }
    // 递归计算左右子节点的最大贡献值
    // 只有在最大贡献值大于 0 时，才会选取对应子节点
    let leftGain = Math.max(finNodeMaxValue(node.left), 0);
    let rightGain = Math.max(finNodeMaxValue(node.right), 0);
    // 节点的最大路径和取决于该节点的值与该节点的左右子节点的最大贡献值
    let priceNewpath = node.val + leftGain + rightGain;
    // 更新答案
    maxSum = Math.max(maxSum, priceNewpath);
    // 返回节点的最大贡献值
    return node.val + Math.max(leftGain, rightGain);
}
