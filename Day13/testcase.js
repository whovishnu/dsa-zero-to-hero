const { maxSumSubarray } = require("./runner");

function test(title, nums, k, expected) {
  const result = maxSumSubarray(nums, k);
  const pass = result === expected ? "✅" : "❌";
  console.log(`${pass} ${title}`);
  if (pass == "❌") {
    console.log(`   Input: nums=${JSON.stringify(nums)}, k=${k}`);
    console.log(`   Expected: ${expected}, Got: ${result}`);
  }
}

// Test Case 1: Basic
test("Test 1", [2, 1, 5, 1, 3, 2], 3, 9); // [5, 1, 3]

// Test Case 2: Increasing values
test("Test 2", [1, 2, 3, 4, 5], 2, 9); // [4, 5]

// Test Case 3: All negative numbers
test("Test 3", [-1, -2, -3, -4], 2, -3); // [-1, -2]

// Test Case 4: Single element window
test("Test 4", [7, 3, 9, 2], 1, 9); // [9]

// Test Case 5: Window size equal to array size
test("Test 5", [1, 2, 3], 3, 6); // Entire array

// Test Case 6: Edge case - window size is 0
test("Test 6", [1, 2, 3], 0, 0); // Should return 0 or error-safe

// Test Case 7: Repeated elements
test("Test 7", [1, 1, 1, 1, 1], 3, 3); // [1,1,1]
