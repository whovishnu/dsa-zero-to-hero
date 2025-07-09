function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    
    while (sum >= target && sum > 0) {
      let newAnswer = i - left + 1;
      if (answer === 0) answer = newAnswer;
      else answer = Math.min(answer, newAnswer);

      sum = sum - nums[left];
      left++;
    }
  }

  return answer;
}

module.exports = minSubArrayLen;
