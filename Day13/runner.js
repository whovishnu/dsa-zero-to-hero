function maxSumSubarray(nums, k) {
  let maxSum = -Infinity;
  let sum = 0;

  for (let right = 0; right < k; right++) {
    sum = sum + nums[right];
  }
  maxSum = sum;

  for (let right = k; right < nums.length; right++) {
    sum = sum + nums[right] - nums[right - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

module.exports = { maxSumSubarray };
