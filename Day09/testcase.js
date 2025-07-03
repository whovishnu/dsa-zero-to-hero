const { nextGreaterElement } = require("./answer");

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

function runNextGreaterElementTests() {
  console.log("Running Next Greater Element I Tests...\n");

  test("Test 1", nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]);
  test("Test 2", nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1]);
  test(
    "Test 3",
    nextGreaterElement([1, 3, 5], [6, 5, 4, 3, 2, 1, 7]),
    [7, 7, 7]
  );
  test("Test 4", nextGreaterElement([2, 1], [2, 3, 1]), [3, -1]);
  test("Test 5", nextGreaterElement([], [2, 3, 1]), []);
}

runNextGreaterElementTests();
