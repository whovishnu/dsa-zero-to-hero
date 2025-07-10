const lengthOfLongestKSubstring = require("./answer.js"); // Update the filename

function test(title, s, k, expected) {
  const result = lengthOfLongestKSubstring(s, k);
  const pass = result === expected ? "✅" : "❌";
  console.log(`${pass} ${title}`);
  if (pass === "❌") {
    console.log(`   Input: s = "${s}", k = ${k}`);
    console.log(`   Expected: ${expected}, Got: ${result}`);
  }
}

// ✅ Test Cases
test("Test 1 - Example Case", "eceba", 2, 3); // "ece"
test("Test 2 - Repeated Char", "aa", 1, 2); // "aa"
test("Test 3 - All Distinct", "abcabcbb", 2, 4); // "bcbb"
test("Test 4 - All Same Char", "aaaaaaa", 1, 7); // whole string
test("Test 5 - Empty String", "", 2, 0);
test("Test 6 - k Larger Than Unique Chars", "abaccc", 10, 6); // whole string
test("Test 7 - Complex", "aabacbebebe", 3, 7); // "cbebebe"
