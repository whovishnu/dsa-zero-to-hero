function removeDuplicates(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length == 0) {
      stack.push(char);
    } else {
      let lastChar = stack[stack.length - 1];
      if(lastChar === char){
        stack.pop()
      }else{
        stack.push(char)
      }
    }
  }

  return stack.join("");
}

module.exports = { removeDuplicates };
