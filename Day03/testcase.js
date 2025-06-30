const { isValid } = require("./answer");

function testIsValid() {
  const testCases = [
    ["()", true],
    ["()[]{}", true],
    ["([)]", false],
    ["{[()]}", true],
    ["{[}", false],
    ["(", false],
    ["", true],
    ["(((((())))))", true],
    ["((((((())", false],
  ];
  let passed = 0;

  testCases.forEach(([input, expected], index) => {
    const result = isValid(input);
    if (result === expected) passed++;
    console.log(
      result === expected
        ? `✅ Test ${index + 1} passed`
        : `❌ Test ${index + 1} failed — got ${result}, expected ${expected}`
    );
  });

  console.log(`\n${passed}/${testCases.length} test cases passed.`);
}

testIsValid();
