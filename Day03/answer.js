function isValid(s) {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (!map[char]) {
      stack.push(char);
    } else {
      const lastItem = stack.pop();
      if (map[char]) {
        if (map[char] != lastItem) {
          return false;
        }
      }
    }
  }

  if(stack.length > 0) return false
  return true;
}

module.exports = { isValid };
