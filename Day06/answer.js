function backspaceCompare(s, t) {
  function processing(str) {
    let stack = [];

    for (let char of str) {
      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }

    return stack.join("");
  }
  return processing(s) === processing(t);
}

module.exports = { backspaceCompare };
