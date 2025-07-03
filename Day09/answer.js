function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const nextGreaterMap = new Map();
  for (let num of nums2) {
    while (stack.length) {
      let lastNum = stack[stack.length - 1];

      if (num > lastNum) {
        nextGreaterMap.set(lastNum, num);
        stack.pop();
      } else {
        break;
      }
    }
    stack.push(num);
  }
  return nums1.map((num) => nextGreaterMap.get(num) ?? -1);
}

module.exports = { nextGreaterElement };
