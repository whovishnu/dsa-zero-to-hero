const { lengthOfLongestSubstring } = require("./runner"); // replace if needed

function test(title, input, expected) {
  const result = lengthOfLongestSubstring(input);
  const pass = result === expected ? "✅" : "❌";
  console.log(`${pass} ${title}`);
  if (pass === "❌") {
    console.log(`   Input: "${input}"`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Got: ${result}`);
  }
}

// Test Cases
test("Test 1", "abcabcbb", 3);
test("Test 2", "bbbbb", 1);
test("Test 3", "pwwkew", 3);
test("Test 4", "", 0);
test("Test 5", " ", 1);
test("Test 6", "dvdf", 3);
test("Test 7", "anviaj", 5);
test("Test 8", "abba", 2);
