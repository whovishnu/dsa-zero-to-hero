function lengthOfLongestSubstring(s) {
  // your code here
  let map = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    if (map.hasOwnProperty(char) && map[char] >= left) {
      left = map[char] + 1;
    }

    map[char] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

module.exports = { lengthOfLongestSubstring };
