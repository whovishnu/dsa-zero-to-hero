function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  heights.push(0); // Flush the stack
  for (let i = 0; i < heights.length; i++) {
    while (stack.length) {
      const curr = heights[i];
      if (curr < heights[stack[stack.length - 1]]) {
        const lastIndex = stack.pop();
        const height = heights[lastIndex];
        const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
      } else {
        break;
      }
    }
    stack.push(i);
  }

  return maxArea;
}

module.exports = { largestRectangleArea };
