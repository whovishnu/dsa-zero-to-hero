const { maxArea } = require("./answer.js"); // 🔁 Update your file name here

function test(title, input, expected) {
  const result = maxArea(input);
  const pass = result === expected;
  const status = pass ? "✅" : "❌";

  console.log(`${status} ${title}`);
  if (!pass) {
    console.log(`   Input: ${JSON.stringify(input)}`);
    console.log(`   Expected: ${expected}, Got: ${result}`);
  }
}

// ✅ Test Cases
test("Test 1", [1, 8, 6, 2, 5, 4, 8, 3, 7], 49);
test("Test 2", [1, 1], 1);
test("Test 3", [4, 3, 2, 1, 4], 16);
test("Test 4", [1, 2, 1], 2);
test("Test 5", [2, 3, 4, 5, 18, 17, 6], 17);
test("Test 6", [1, 3, 2, 5, 25, 24, 5], 24);
test("Test 7", [1, 2, 4, 3], 4);
