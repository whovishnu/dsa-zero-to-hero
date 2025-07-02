function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = []; // stores indices
  for (let i = 0; i < n; i++) {
    while (stack.length) {
      const pendingDayIndex = stack[stack.length - 1];

      if (temperatures[i] > temperatures[pendingDayIndex]) {
        answer[pendingDayIndex] = i - pendingDayIndex;
        stack.pop();
      } else {
        break;
      }
    }
    stack.push(i);
  }

  return answer;
}

module.exports = { dailyTemperatures };
