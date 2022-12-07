var NumArray = function (nums) {
    let container = [0];
    for (let i = 1; i <= nums.length; i++) {
        container[i] = nums[i - 1] + container[i - 1];
    }
    console.log(container);
    return container;
};

let temp = new NumArray([-2, 0, 3, -5, 2, -1]);

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let rightValue = NumArray.prototype.container[right + 1];
    let leftValue = NumArray.prototype.container[left];
    return rightValue - leftValue;
};
