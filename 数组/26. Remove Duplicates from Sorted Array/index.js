/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针思路
// 一个指针指向当前的位置, 一个指针指向下一个位置

var removeDuplicates = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    let fastPointer = 1;
    let slowPointer = 0;
    // 只要fastPointer没有到达数组的末尾, 就一直循环
    while (fastPointer < nums.length) {
        let fastNumber = nums[fastPointer];
        let slowNumber = nums[slowPointer];
        // 如果fastNumber 和 slowNumber 不相等, 那么就把fastNumber的值赋值给slowPointer的下一个位置
        if (fastNumber !== slowNumber) {
            // 注意要先++, 在赋值
            slowPointer++;
            nums[slowPointer] = nums[fastPointer];
        }
        // 每次while循环 fastPointer都要++;
        fastPointer++;
    }
    // 这里注意slowPointer是从0开始的, 所以要+1
    return slowPointer + 1;
};
