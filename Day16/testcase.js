const { removeDuplicates } = require("./answer.js"); // 🔁 update filename

function test(title, input, expectedLength, expectedArrayStart) {
  const nums = [...input]; // clone input to avoid mutation in test
  const result = removeDuplicates(nums);
  const pass =
    result === expectedLength &&
    JSON.stringify(nums.slice(0, result)) === JSON.stringify(expectedArrayStart);

  const status = pass ? "✅" : "❌";
  console.log(`${status} ${title}`);

  if (!pass) {
    console.log(`   Input: ${JSON.stringify(input)}`);
    console.log(`   Expected Length: ${expectedLength}, Got: ${result}`);
    console.log(`   Expected Array: ${JSON.stringify(expectedArrayStart)}, Got: ${JSON.stringify(nums.slice(0, result))}`);
  }
}

// ✅ Test Cases
test("Test 1", [1, 1, 2], 2, [1, 2]);
test("Test 2", [0,0,1,1,1,2,2,3,3,4], 5, [0,1,2,3,4]);
test("Test 3", [1,2,3], 3, [1,2,3]);
test("Test 4", [1,1,1,1], 1, [1]);
test("Test 5 - Empty", [], 0, []);
test("Test 6 - Single element", [99], 1, [99]);
