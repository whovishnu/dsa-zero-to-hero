function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;

  while (i != j) {
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i));

    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return max;
}

module.exports = {
  maxArea,
};
