/** 
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let leftPointer = 0;
    let rightPointer = height.length -1;
    let  volumeRecorder = 0;
    while(leftPointer < rightPointer) {
        volumeRecorder = Math.max(volumeRecorder, getVolume(leftPointer, rightPointer,height))
        if(height[leftPointer]>height[rightPointer]){
            rightPointer--;
        } else {
            leftPointer++;
        }
    }
    return volumeRecorder;
};

/**
 * 根据当前的pointer来计算出我们的volume
 * @param {*} firstPointer 
 * @param {*} lastPointer 
 * @param {*} height 
 * @returns 
 */
function getVolume(firstPointer,lastPointer,height ){
    return (Math.min(height[firstPointer], height[lastPointer])) * (lastPointer-firstPointer);
}