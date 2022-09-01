let memo;

var numTrees = function(n) {
    // 这里必须+1, 因为 n从1开始,不是0开始, 所以容量+1
    memo = new Array(n+1);
    for(let i =0; i<memo.length; i++){
        // 这里必须+1, 因为 n从1开始,不是0开始, 所以容量+1
        memo[i] = new Array(n+1);
    }
    return build(1, n);
};


function build(lo, hi) {
    // 先写出base case, 如果 lo < hi 说明为null 也是一种情况
    if(lo > hi) { 
        return 1; 
    }
    // 如果之前的以 i 为 root的 排列组合 BST 出现过
    if(memo[lo][hi]) {
        return memo[lo][hi];
    }

    let res =0;
    for(let  root =lo; root<=hi; root++){
        let left = build(lo, root-1);
        let right = build(root+1, hi);
        res += left*right;
    }
    // 这就是把 以 lo 为边间 到以 hi 边间的排列组合算出来
    memo[lo][hi] = res;
    return res;
}