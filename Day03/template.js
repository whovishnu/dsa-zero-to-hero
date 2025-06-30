function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let char of s) {
    // TODO: If opening bracket, push to stack
    // TODO: If closing bracket, check top of stack
  }

  // TODO: Return true if stack is empty (all matched)
  return false;
}

module.exports = { isValid };
