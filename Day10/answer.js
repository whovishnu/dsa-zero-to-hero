function nextGreaterElements(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < 2 * n; i++) {
    const curr = nums[i % n];

    while (stack.length) {
      let lastIndex = stack[stack.length - 1];
      if (curr > nums[lastIndex]) {
        result[lastIndex] = curr;
        stack.pop()
      } else {
        break;
      }
    }

    if (i < n) {
      stack.push(i); 
    }
  }

  return result;
}

module.exports = { nextGreaterElements };
