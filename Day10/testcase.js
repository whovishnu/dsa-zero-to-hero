const { nextGreaterElements } = require("./answer");

function test(label, actual, expected) {
  const isEqual = JSON.stringify(actual) === JSON.stringify(expected);
  if (isEqual) {
    console.log(`✅ ${label}`);
  } else {
    console.log(
      `❌ ${label} — got ${JSON.stringify(actual)}, expected ${JSON.stringify(
        expected
      )}`
    );
  }
}

function runNextGreaterElementsTests() {
  console.log("Running Next Greater Element II (Circular) Tests...\n");

  test("Test 1", nextGreaterElements([1, 2, 1]), [2, -1, 2]);
  test("Test 2", nextGreaterElements([1, 2, 3, 4, 3]), [2, 3, 4, -1, 4]);
  test("Test 3", nextGreaterElements([5, 4, 3, 2, 1]), [-1, 5, 5, 5, 5]);
  test("Test 4", nextGreaterElements([2, 2, 2]), [-1, -1, -1]);
  test("Test 5", nextGreaterElements([3, 8, 4, 1, 2]), [8, -1, 8, 2, 3]);
  test("Test 6", nextGreaterElements([]), []);
}

runNextGreaterElementsTests();
