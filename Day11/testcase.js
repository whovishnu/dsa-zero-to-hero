const { largestRectangleArea } = require("./runner"); // adjust if needed

function test(title, input, expected) {
  const result = largestRectangleArea(input.slice()); // use slice() to avoid modifying original
  const pass = result === expected ? "✅" : "❌";
  console.log(`${pass} ${title}`);
  if (pass == "❌") {
    console.log(`   Input: ${JSON.stringify(input)}`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Got: ${result}`);
  }
}

// Test Cases
test("Test 1", [2, 1, 5, 6, 2, 3], 10);
test("Test 2", [2, 4], 4);
test("Test 3", [2, 1, 2], 3);
test("Test 4", [1, 1], 2);
test("Test 5", [6, 2, 5, 4, 5, 1, 6], 12);
test("Test 6", [1], 1);
test("Test 7", [0, 9], 9);
test("Test 8", [2, 1, 2, 3, 1], 5);
