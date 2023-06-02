function bubbleSort(nums) {
  // loop over nums arr
  for (let i = 0; i < nums.length; i++){
    // loop over nums arr -1
    for (let j = 0; j < nums.length - i; j++){
      if (nums[j] > nums[j+1]) {
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }
    }
  }
  return nums;
}

module.exports = bubbleSort;