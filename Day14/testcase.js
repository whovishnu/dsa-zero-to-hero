const minSubArrayLen = require("./answer");

function test(title, nums, target, expected) {
  const result = minSubArrayLen(target, nums);
  const pass = result === expected ? "✅" : "❌";
  console.log(`${pass} ${title}`);
  if (pass === '❌') {
    console.log(`   Input: nums = ${JSON.stringify(nums)}, target = ${target}`);
    console.log(`   Expected: ${expected}, Got: ${result}`);
  }
}

// ✅ Test Cases

test("Test 1 - Basic", [2, 3, 1, 2, 4, 3], 7, 2); // [4,3]
test("Test 2 - No subarray", [1, 1, 1, 1, 1, 1], 11, 0); // No valid window
test("Test 3 - Entire array needed", [1, 2, 3, 4], 10, 4); // [1,2,3,4]
test("Test 4 - Single large element", [1, 4, 4], 4, 1); // [4]
test("Test 5 - Multiple valid subarrays", [1, 2, 3, 4, 5], 11, 3); // [3,4,5]
test("Test 6 - Empty input", [], 5, 0);
test("Test 7 - Target 0", [1, 2, 3], 0, 1); // any 1 element is enough
